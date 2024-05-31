import {Button, InputDate, InputText, InputTime, Select} from '../UI';
import {firestore} from '@/firebase';
import type {Project, Task} from '@/model';
import {Timestamp} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {useProjects} from '@/hook/useProjects';
import styled from 'styled-components';

const {VITE_USER_ID} = import.meta.env;

type AddFormProps = {
  projectId?: string;
  optionalActionFunction?: () => void;
};

/**
 * Projectデータを選択可能なSelect/Option構造の配列に変換.
 * 選択要素の<option>タグとして表示するためのラベルと値を有する.
 *
 * @param {Project[]} projects  - Projectデータ.
 * @returns {Array<{ value: string, label: string }>} - <option>タグオブジェクトの配列.
 */
function getSelectOptionsFromProjects(
  projects: Project[],
): Array<{value: string; label: string}> {
  return projects.map((project) => ({
    value: project.id,
    label: project.name,
  }));
}

/**
 * 現在時刻を取得.
 *
 * @returns {string}
 *   Format. (YYYY-MM-DD)
 */
function getNow(): string {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();
  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

/**
 * 日付の有効性チェック.
 *
 * @param {Date} date
 * @returns {Boolean}
 */
function isValidDate(date: Date): boolean {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

export const AddForm: React.FC<AddFormProps> = ({
  projectId,
  optionalActionFunction,
}) => {
  /**
   * Form要素の状態管理.
   *
   * - タスク名.
   * - プロジェクト選択.
   * - 日付と時刻選択.
   */
  const [task, setTask] = useState<string>('');
  const [projectValue, setProjectValue] = useState<string>(
    projectId ? projectId : '',
  );
  const [dateValue, setDateValue] = useState<string>(getNow());
  const [timeValue, setTimeValue] = useState<string>('00:00');

  // Projectデータの加工.
  const {projects} = useProjects(VITE_USER_ID);
  const options = getSelectOptionsFromProjects(projects);

  // Select/Optionの初期値設定.
  useEffect(() => {
    if (projectId) {
      setProjectValue(projectId);
    }
  }, [projectId]);

  // タスク追加
  const addTask = () => {
    if (task.trim() && projectValue) {
      const taskDate: Omit<Task, 'id'> = {
        archived: false,
        projectId: projectValue,
        name: task,
        userId: VITE_USER_ID,
      };

      const newDate = new Date(`${dateValue}T${timeValue}`);
      if (isValidDate(newDate)) {
        const dateValue = Timestamp.fromDate(newDate);
        taskDate.date = dateValue;
      }
      firestore
        .collection('tasks')
        .add(taskDate)
        .then(() => {
          setTask('');
          optionalActionFunction;
        });
    }
  };

  return (
    <>
      <StyledForm>
        <InputText
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <StyledActionsWrapper>
          <StyledOptions>
            <Select
              options={options}
              value={projectValue}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setProjectValue(event.target.value);
              }}
            />
            <InputDate
              value={dateValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDateValue(event.target.value);
              }}
            />
            <InputTime
              value={timeValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTimeValue(event.target.value);
              }}
            />
          </StyledOptions>
          <StyledActions>
            <Button
              variant="primary"
              label="タスクを追加"
              onClick={() => {
                addTask();
              }}
            />
            <Button
              variant="secondary"
              label="キャンセル"
              onClick={() => {
                optionalActionFunction;
              }}
            />
          </StyledActions>
        </StyledActionsWrapper>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const StyledOptions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledActions = styled.div`
  display: flex;
  gap: 8px;
`;

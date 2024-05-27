import {Button, InputDateTime, InputText, Select} from '../UI';
import {firestore} from '@/firebase';
import {Project, Task} from '@/model';
import {Timestamp} from 'firebase/firestore';
import {useProjects} from '@/hook/useProjects';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const {VITE_USER_ID} = import.meta.env;

interface AddTaskProps {
  projectId?: string;
}

const projectDataToOptions = (projects: Project[]) => {
  return projects.map((project) => ({
    value: project.id,
    label: project.name,
  }));
};

export const AddTask: React.FC<AddTaskProps> = ({projectId}) => {
  // Formの表示/非表示.
  const [visibile, setVisibile] = useState<boolean>(false);
  // タスク名.
  const [task, setTask] = useState<string>('');
  // プロジェクト選択.
  const [projectValue, setProjectValue] = useState<string>(
    projectId ? projectId : '',
  );
  // 選択UI.
  const [dateTimeValue, setDateTimeValue] = useState<string>('');

  const {projects} = useProjects(VITE_USER_ID);

  // ProjectデータをSelect/Optionへ加工.
  const options = projectDataToOptions(projects);

  // Select/Optionの初期値設定. `projectId`に依存.
  useEffect(() => {
    if (projectId) {
      setProjectValue(projectId);
    }
  }, [projectId]);

  // 日付の有効性チェック関数
  const isValidDate = (date: Date) => {
    return date instanceof Date && !isNaN(date.getTime());
  };

  // タスク追加
  const addTask = () => {
    if (task.trim() && projectValue) {
      const taskDate: Omit<Task, 'id'> = {
        archived: false,
        projectId: projectValue,
        name: task,
        userId: VITE_USER_ID,
      };

      const newDate = new Date(dateTimeValue);
      if (isValidDate(newDate)) {
        const dateValue = Timestamp.fromDate(newDate);
        taskDate.date = dateValue;
      }
      firestore
        .collection('tasks')
        .add(taskDate)
        .then(() => {
          setTask('');
          setDateTimeValue('');
          setVisibile(true);
        });
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledAddTaskButton
          onClick={() => setVisibile(!visibile)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setVisibile(!visibile);
          }}>
          <StyledIcon>+</StyledIcon>
          <StyledButtonLabel>タスクを追加</StyledButtonLabel>
        </StyledAddTaskButton>
        {visibile && (
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
                <InputDateTime
                  value={dateTimeValue}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setDateTimeValue(event.target.value);
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
                    setVisibile(false);
                  }}
                />
              </StyledActions>
            </StyledActionsWrapper>
          </StyledForm>
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  margin-top: 20px;
`;

const StyledAddTaskButton = styled.button`
  cursor: pointer;
  margin-bottom: 20px;
  color: #545454;

  &:hover {
    color: #dd4b39;
  }
`;

const StyledIcon = styled.span`
  color: #dd4b39;
  font-size: 18px;
`;

const StyledButtonLabel = styled.div`
  display: inline-block;
  color: inherit;
  font-size: 14px;
  margin-left: 15px;
`;

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
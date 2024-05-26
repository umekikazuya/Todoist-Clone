import {Button, InputText} from '../UI';
import {FaRegListAlt, FaRegCalendarAlt} from 'react-icons/fa';
import {firestore} from '@/firebase';
import React, {useState} from 'react';
import SelectDate from './SelectDate';
import SelectProject from '../feature/project/SelectProject';
import styled from 'styled-components';

const {VITE_USER_ID} = import.meta.env;

interface AddTaskProps {
  showAddTaskMain?: boolean;
}

export const AddTask: React.FC<AddTaskProps> = ({showAddTaskMain = true}) => {
  // @todo
  const [showMain, setShowMain] = useState<boolean>(false);
  // タスク名.
  const [task, setTask] = useState<string>('');
  // 選択UI.
  const [taskDateValue, setTaskDateValue] = useState<string>('');
  const [projectValue, setProjectValue] = useState<string>('');
  const [showProjectOverlay, setShowProjectOverlay] = useState<boolean>(false);
  const [showTaskDateOverlay, setShowTaskDateOverlay] =
    useState<boolean>(false);

  const addTask = () => {
    const projectId = projectValue || '';

    if (task.trim() && projectId) {
      firestore
        .collection('tasks')
        .add({
          archived: false,
          projectId,
          name: task,
          date: taskDateValue,
          userId: VITE_USER_ID,
        })
        .then(() => {
          setTask('');
          setProjectValue('');
          setShowMain(true);
          setShowProjectOverlay(false);
        });
    }
  };

  return (
    <>
      <StyledContainer>
        {showAddTaskMain && (
          <StyledWrapper
            onClick={() => setShowMain(!showMain)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShowMain(!showMain);
            }}>
            <StyledIcon>+</StyledIcon>
            <StyledButtonLabel>タスクを追加</StyledButtonLabel>
          </StyledWrapper>
        )}

        {showMain && (
          <StyledForm>
            <SelectProject
              setProjectValue={setProjectValue}
              showProjectOverlay={showProjectOverlay}
              setShowProjectOverlay={setShowProjectOverlay}
            />
            <SelectDate
              setTaskDateValue={setTaskDateValue}
              showTaskDateOverlay={showTaskDateOverlay}
              setShowTaskDateOverlay={setShowTaskDateOverlay}
            />
            <InputText
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
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
                  setShowMain(false);
                  setShowProjectOverlay(false);
                }}
              />
            </StyledActions>
            <StyledFormOption
              onClick={() => setShowProjectOverlay(!showProjectOverlay)}
              onKeyDown={(e) => {
                if (e.key === 'Enter')
                  setShowProjectOverlay(!showProjectOverlay);
              }}
              role="button">
              <FaRegListAlt size={14} />
            </StyledFormOption>
            <StyledFormOption
              className="add-task__date"
              data-testid="show-task-date-overlay"
              onClick={() => setShowTaskDateOverlay(!showTaskDateOverlay)}
              onKeyDown={(e) => {
                if (e.key === 'Enter')
                  setShowTaskDateOverlay(!showTaskDateOverlay);
              }}>
              <FaRegCalendarAlt size={14} />
            </StyledFormOption>
          </StyledForm>
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  margin-top: 20px;
`;

const StyledWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
`;

const StyledIcon = styled.span`
  color: #dd4b39;
  font-size: 18px;
`;

const StyledButtonLabel = styled.div`
  display: inline-block;
  color: #545454;
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

const StyledFormOption = styled.span`
  cursor: pointer;
  float: right;
  color: gray;
  margin: 20px 10px;
`;

const StyledActions = styled.div`
  display: flex;
  gap: 8px;
`;

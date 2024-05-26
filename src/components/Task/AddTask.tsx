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
            <StyledInputText
              aria-label="Enter your task"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <StyledActions>
              <StyledPrimaryButton
                type="button"
                className="add-task__submit"
                data-testid="add-task"
                onClick={() => {
                  addTask();
                }}>
                タスクを追加
              </StyledPrimaryButton>
              <StyledSecondaryButton
                className="add-task__cancel"
                data-testid="add-task-main-cancel"
                onClick={() => {
                  setShowMain(false);
                  setShowProjectOverlay(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                  }
                }}
                aria-label="Cancel adding a task"
                tabIndex={0}
                role="button">
                Cancel
              </StyledSecondaryButton>
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
`;

const StyledInputText = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  background-color: white !important;
  border-radius: 3px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
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

const StyledPrimaryButton = styled.button`
  background-color: #db4c3f;
  color: #fff;
  font-weight: bold;
  font-size: 13px !important;
  justify-content: center;
  border-radius: 5px;
  width: 90px;
  padding: 0 12px;
  line-height: 32px;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #c3392c;
    color: #fff;
  }
  &:active {
    transform: scale(0.97);
    transition: transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235);
  }
`;

const StyledSecondaryButton = styled.button`
  background-color: #f5f5f5;
  color: #555;
  font-weight: bold;
  font-size: 13px !important;
  justify-content: center;
  border-radius: 5px;
  max-width: 100%;
  min-width: 68px;
  padding: 0 12px;
  line-height: 32px;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e5e5e5;
    color: #1a1a1a;
  }
  &:active {
    transform: scale(0.97);
    transition: transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235);
  }
`;

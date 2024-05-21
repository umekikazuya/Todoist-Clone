import {FaRegListAlt, FaRegCalendarAlt} from 'react-icons/fa';
import {firestore} from '@/firebase';
import {useTaskFilterContext} from '@/context/hook';
import React, {useState} from 'react';
import SelectDate from './SelectDate';
import SelectProject from '../project/SelectProject';

const {VITE_USER_ID} = import.meta.env;

interface AddTaskProps {
  showAddTaskMain?: boolean;
  showQuickAddTask?: boolean;
  setShowQuickAddTask?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddTask: React.FC<AddTaskProps> = ({
  showAddTaskMain = true,
  showQuickAddTask = false,
  setShowQuickAddTask,
}) => {
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

  const {currentTaskFilter} = useTaskFilterContext();

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
      <div
        className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
        data-testid="add-task-comp">
        {showAddTaskMain && (
          <div
            className="add-task__shallow"
            onClick={() => setShowMain(!showMain)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setShowMain(!showMain);
            }}
            tabIndex={0}
            aria-label="Add task"
            role="button">
            <span className="add-task__plus">+</span>
            <span className="add-task__text">Add Task</span>
          </div>
        )}

        {(showMain || showQuickAddTask) && setShowQuickAddTask && (
          <div
            className="add-task__main"
            data-testid="add-task-main">
            {showQuickAddTask && (
              <>
                <div data-testid="quick-add-task">
                  <h2 className="header">Quick Add Task</h2>
                  <span
                    className="add-task__cancel-x"
                    aria-label="Cancel adding task"
                    onClick={() => {
                      setShowMain(false);
                      setShowProjectOverlay(false);
                      setShowQuickAddTask(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setShowMain(false);
                        setShowProjectOverlay(false);
                        setShowQuickAddTask(false);
                      }
                    }}
                    tabIndex={0}
                    role="button">
                    X
                  </span>
                </div>
              </>
            )}
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
            <input
              className="add-task__content"
              aria-label="Enter your task"
              data-testid="add-task-content"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              type="button"
              className="add-task__submit"
              data-testid="add-task"
              onClick={() => {
                addTask();
                if (showQuickAddTask) {
                  setShowQuickAddTask(false);
                }
              }}>
              Add Task
            </button>
            {!showQuickAddTask && (
              <span
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
              </span>
            )}
            <span
              className="add-task__project"
              data-testid="show-project-overlay"
              onClick={() => setShowProjectOverlay(!showProjectOverlay)}
              onKeyDown={(e) => {
                if (e.key === 'Enter')
                  setShowProjectOverlay(!showProjectOverlay);
              }}
              tabIndex={0}
              role="button">
              <FaRegListAlt />
            </span>
            <span
              className="add-task__date"
              data-testid="show-task-date-overlay"
              onClick={() => setShowTaskDateOverlay(!showTaskDateOverlay)}
              onKeyDown={(e) => {
                if (e.key === 'Enter')
                  setShowTaskDateOverlay(!showTaskDateOverlay);
              }}
              tabIndex={0}
              role="button">
              <FaRegCalendarAlt />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

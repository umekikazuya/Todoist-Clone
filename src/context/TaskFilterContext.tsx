import {TaskFilter} from '@/constants';
import {createContext} from 'react';

export type TaskFilterContextType = {
  currentTaskFilter: TaskFilter;
  setCurrentTaskFilter: React.Dispatch<React.SetStateAction<TaskFilter>>;
};

const TaskFilterContext = createContext<TaskFilterContextType | undefined>(
  undefined,
);

export default TaskFilterContext;

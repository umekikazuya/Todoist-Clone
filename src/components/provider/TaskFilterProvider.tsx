import {TaskFilter} from '@/constants';
import TaskFilterContext from '@/context/TaskFilterContext';
import {ReactNode, useState} from 'react';

type ProviderProps = {
  children: ReactNode;
};

const defaultTaskFilter: TaskFilter = {key: 'inbox', name: 'Inbox'};

export const TaskFilterProvider: React.FC<ProviderProps> = ({children}) => {
  const [currentTaskFilter, setCurrentTaskFilter] =
    useState<TaskFilter>(defaultTaskFilter);

  return (
    <TaskFilterContext.Provider
      value={{currentTaskFilter, setCurrentTaskFilter}}>
      {children}
    </TaskFilterContext.Provider>
  );
};

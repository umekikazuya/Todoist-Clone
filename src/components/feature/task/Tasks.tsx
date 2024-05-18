import {useTaskFilterContext} from '@/context/hook';
import {useTasks} from '@/hook/useTasks';
import React from 'react';
import Task from './Task';

export const Tasks: React.FC = () => {
  const {currentTaskFilter} = useTaskFilterContext();
  const tasks = useTasks(currentTaskFilter.key);

  return (
    <ul className="tasks__list">
      {tasks.map(task => (
        <Task data={task} />
    ))}
    </ul>
  );
};

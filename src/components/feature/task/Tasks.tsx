import {useTaskFilterContext} from '@/context/hook';
import {useTasks} from '@/hook/useTasks';
import React from 'react';

export const Tasks: React.FC = () => {
  const {currentTaskFilter} = useTaskFilterContext();

  const tasks = useTasks(currentTaskFilter.key);

  return (
    <ul className="tasks__list">
      {tasks.map(task => (
      <li key={task.docId}>
        {/* <Checkbox id={task.id} taskDesc={task.task} /> */}
        <span>{task.name}</span>
      </li>
    ))}
    </ul>
  );
};

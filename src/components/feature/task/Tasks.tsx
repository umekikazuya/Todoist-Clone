import Task from './Task';
import {Task as TaskType} from '@/model';
import styled from 'styled-components';

export const Tasks = ({data}: {data: TaskType[]}) => {
  return (
    <>
      <StyledList>
        {data.map((task) => (
          <Task key={task.id} data={task} />
        ))}
      </StyledList>
      {/* @todo AddTask */}
    </>
  );
};

const StyledList = styled.ul`
  padding-top: 16px;
`;

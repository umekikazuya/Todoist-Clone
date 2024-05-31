import {Task as TaskType} from '@/model';
import styled from 'styled-components';
import ListItem from './ListItem';

export const List = ({data}: {data: TaskType[]}) => {
  return (
    <>
      <StyledList>
        {data.map((task) => (
          <ListItem
            key={task.id}
            data={task}
          />
        ))}
      </StyledList>
    </>
  );
};

const StyledList = styled.ul`
  padding-top: 16px;
`;

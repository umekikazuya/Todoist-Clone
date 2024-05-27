import {firestore} from '@/firebase';
import {Task as TaskType} from '@/model';
import styled from 'styled-components';

export default function TaskItem({data}: {data: TaskType}) {
  // Set archive.
  const archiveTask = () => {
    firestore
      .collection('tasks')
      .doc(data.id)
      .update({
        archived: true,
      })
      .then(() => {
        // No script.
      })
      .catch(() => {
        // No script.
      });
  };

  return (
    <StyledListItem>
      <StyledArchiveButton
        onClick={() => archiveTask()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') archiveTask();
        }}>
        <StyledArchiveButtonCircle />
      </StyledArchiveButton>
      <span>{data.name}</span>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  display: flex;
  line-height: 18px;
  color: #333;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  list-style-type: none;
  border-bottom: 1px solid #f0f0f0;
`;

const StyledArchiveButton = styled.button`
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 16px;
`;

const StyledArchiveButtonCircle = styled.span`
  cursor: pointer;
  border-color: gray;
  color: #343434;
  height: 16px;
  width: 16px;
  display: block;
  border: 1px solid gray;
  border-radius: 16px;
`;

import {AddButton as Button} from '../UI';
import {AddForm} from './AddForm';
import React, {useState} from 'react';
import styled from 'styled-components';

interface AddTaskProps {
  projectId?: string;
}

export const AddButton: React.FC<AddTaskProps> = ({projectId}) => {
  // Formの表示/非表示.
  const [visibile, setVisibile] = useState<boolean>(false);

  return (
    <>
      <StyledAddTask>
        <Button
          label="タスクを追加"
          onClick={() => setVisibile(!visibile)}
        />
        {visibile && (
          <AddForm
            projectId={projectId}
            optionalActionFunction={() => setVisibile(!visibile)}
          />
        )}
      </StyledAddTask>
    </>
  );
};

const StyledAddTask = styled.div`
  margin-top: 20px;
`;

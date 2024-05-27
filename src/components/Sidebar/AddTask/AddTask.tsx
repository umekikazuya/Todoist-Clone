import {FaPlus} from 'react-icons/fa';
import styled from 'styled-components';

export default function AddTask() {
  return (
    <Container>
      <Button type="button">
        <ButtonIcon>
          <FaPlus
            size={14}
            fill="#666"
          />
        </ButtonIcon>
        <ButtonLabel>タスクを追加</ButtonLabel>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 24px;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ButtonIcon = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const ButtonLabel = styled.div`
  width: 100%;
  font-weight: 600;
  color: #a81f00;
  text-align: start;
  padding-left: 6px;
`;

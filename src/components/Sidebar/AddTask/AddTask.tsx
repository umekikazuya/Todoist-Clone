import styled from 'styled-components';

export default function AddTask() {
  return (
    <Container>
      <Inner>
        <Label>Todo App</Label>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 24px;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Label = styled.div`
  width: 100%;
  font-weight: 600;
  color: #a81f00;
  text-align: start;
  padding-left: 6px;
`;

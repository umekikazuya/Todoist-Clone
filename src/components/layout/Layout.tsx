import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout() {
  return (
    <Container>
      <Sidebar />
      <MainArea>
        <MainAreaWrapper>
          <Outlet />
        </MainAreaWrapper>
      </MainArea>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fcfaf8;
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const MainArea = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: #fff;
`;

const MainAreaWrapper = styled.div`
  padding-top: 64px;
  max-width: 800px;
  width: 100%;
`;

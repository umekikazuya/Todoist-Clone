import {AddTask, Filter, ProjectList} from '@/feature/sidebar';
import styled from 'styled-components';

export default function Sidebar() {
  return (
    <Nav>
      <AddTask />
      <Menu>
        <Filter />
        <ProjectList />
      </Menu>
    </Nav>
  );
}

const Nav = styled.nav`
  max-width: 420px;
  min-width: 210px;
  height: 100vh !important;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

import AddTask from './AddTask';
import Filter from './Filter';
import ProjectList from './ProjectList';
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
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Menu = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

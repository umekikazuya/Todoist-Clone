import styled from 'styled-components';
import AddTask from './AddTask/AddTask';
import Filter from './Filter/Filter';
import {SidebarProject} from './Project';

export default function Sidebar() {
  return (
    <Nav>
      <AddTask />
      <Menu>
        <Filter />
        <SidebarProject />
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

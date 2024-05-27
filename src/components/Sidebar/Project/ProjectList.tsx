import {useProjects} from '@/hook/useProjects';
import {Project} from '@/model';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import ProjectListItem from './ProjectListItem';

const {VITE_USER_ID} = import.meta.env;

export default function ProjectList() {
  const {projects: data} = useProjects(VITE_USER_ID);

  return (
    <StyledList>
      {data.map((project: Project) => (
        <StyledListItem key={project.id}>
          <StyledNavLink to={`/project/${project.id}`}>
            <ProjectListItem data={project} />
          </StyledNavLink>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 10px 0px;
`;

const StyledListItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  padding: 3px 6px 3px 6px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  &.active {
    background-color: #ffefe5;
  }
`;

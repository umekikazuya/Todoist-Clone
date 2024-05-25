import {AddProject} from '@/components/feature/project/AddProject';
import {FaChevronDown} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {Project as ProjectType} from '@/model';
import {useProjects} from '@/hook/useProjects';
import Project from '@/components/feature/project/Project';
import styled from 'styled-components';

const {VITE_USER_ID} = import.meta.env;

export default function ProjectList() {
  const {projects} = useProjects(VITE_USER_ID);

  return (
    <>
      <div>
        <StyledLabelContainer>
          <StyledLabel>マイ プロジェクト</StyledLabel>
          <StyledLabelIcon>
            <FaChevronDown />
          </StyledLabelIcon>
        </StyledLabelContainer>
        <StyledList>
          {projects.map((project: ProjectType) => (
            <StyledListItem key={project.id}>
              <StyledNavLink to={`/project/${project.id}`}>
                <Project data={project} />
              </StyledNavLink>
            </StyledListItem>
          ))}
        </StyledList>
        <AddProject />
      </div>
    </>
  );
}

const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.div`
  font-weight: 600;
  color: #666;
`;

const StyledLabelIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  color: #666;
`;

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

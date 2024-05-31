import {Link} from '@/components/UI';
import {useProjects} from '@/hook/useProjects';
import ListItem from './ListItem';
import styled from 'styled-components';
import type {Project} from '@/model';

const {VITE_USER_ID} = import.meta.env;

export default function List() {
  const {projects: data} = useProjects(VITE_USER_ID);

  return (
    <StyledList>
      {data.map((project: Project) => (
        <li key={project.id}>
          <Link to={`/project/${project.id}`}>
            <ListItem data={project} />
          </Link>
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 10px 0px;
`;

import {Link} from '@/components/UI';
import {Project} from '@/model';
import {useProjects} from '@/hook/useProjects';
import ListItem from './ListItem';
import styled from 'styled-components';

const {VITE_USER_ID} = import.meta.env;

export default function List() {
  const {projects: data} = useProjects(VITE_USER_ID);

  return (
    <StyledList>
      {data.map((project: Project) => (
        <li key={project.id}>
          <Link
            to={`/project/${project.id}`}
            children={<ListItem data={project} />}
          />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 10px 0px;
`;

import {useProjectsContext} from '@/context/hook';
import {Project as ProjectType} from '@/types';
import {useState} from 'react';
import { AddProject } from './AddProject';
import Project from './Project';

export default function Projects() {
  const {projects} = useProjectsContext();
  const [active, setActive] = useState<string>('');

  return (
    <>
      <ul className="sidebar__projects">
        {projects &&
          projects.map((project: ProjectType) => (
            <li
              key={project.id}
              data-testid="project-action-parent"
              data-doc-id={project.id}
              className={
                active === project.id
                  ? 'active sidebar__project'
                  : 'sidebar__project'
              }>
              <div
                role="button"
                className='project-item'
                data-testid="project-action"
                tabIndex={0}
                aria-label={`Select ${project.name} as the task project`}
                onClick={() => {
                  setActive(project.id);
                  // setSelectedProject(project.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setActive(project.id);
                    // setSelectedProject(project.id);
                  }
                }}>
                <Project data={project} />
              </div>
            </li>
          ))}
      </ul>
      <AddProject />
    </>
  );
}

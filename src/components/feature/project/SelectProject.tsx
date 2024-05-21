import {useProjects} from '@/hook/useProjects';
import React from 'react';

const {VITE_USER_ID} = import.meta.env;

interface Props {
  setProjectValue: React.Dispatch<React.SetStateAction<string>>;
  showProjectOverlay: boolean;
  setShowProjectOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectProject({
  setProjectValue,
  showProjectOverlay,
  setShowProjectOverlay,
}: Props) {
  const {projects} = useProjects(VITE_USER_ID);

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li key={project.id}>
              <div
                onClick={() => {
                  setProjectValue(project.id);
                  setShowProjectOverlay(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setProjectValue(project.id);
                    setShowProjectOverlay(false);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task project">
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

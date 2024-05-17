import ProjectsContext from '@/context/ProjectsContext';
import {useProjects} from '@/hook/useProjects';
import React, {ReactNode} from 'react';

type ProviderProps = {
  children: ReactNode;
};

const {VITE_USER_ID} = import.meta.env;

export const ProjectsProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const {projects, setProjects} = useProjects(VITE_USER_ID);

  return (
    <ProjectsContext.Provider value={{projects, setProjects}}>
      {children}
    </ProjectsContext.Provider>
  );
};

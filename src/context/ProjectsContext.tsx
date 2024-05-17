import {Project} from '@/types';
import React, {createContext} from 'react';

type ProjectsContextType = {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
};

const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined,
);

export default ProjectsContext;

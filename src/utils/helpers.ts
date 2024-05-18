import {Project} from '@/types';

// ProjectIdからProjectItemを取得.
export const getProject = (
  projects: Project[],
  projectId: string,
): Project | undefined =>
  projects.find((project) => project.projectId === projectId);

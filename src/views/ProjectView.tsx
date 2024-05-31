import {AddButton, List} from '@/components/Task';
import {getProject} from '@/firebase';
import {Header} from '@/components/Layout';
import {Project} from '@/model';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useTasksByProject} from '@/hook/useTasksByProject';

type Params = {
  projectId: string;
};

export default function ProjectView(): React.ReactNode {
  const params = useParams<Params>();
  const [project, setProject] = useState<Project | null>(null);
  const projectId = params.projectId ?? null;
  const tasks = useTasksByProject({projectId, isArchive: false});

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProject(projectId ?? '');
        setProject(projectData);
      } catch {
        // No script.
      }
    };
    fetchProject();
  }, [projectId]);

  return (
    <>
      <Header title={project?.name ?? ''} />
      <List data={tasks} />
      <AddButton projectId={project?.id ?? undefined} />
    </>
  );
}

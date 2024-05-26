import {Header} from '@/components/Layout';
import {Tasks} from '@/components/Task/Tasks';
import {useParams} from 'react-router-dom';
import {useTasks} from '@/hook/useTasks';

type Params = {
  projectId: string;
};

export default function ProjectView(): React.ReactNode {
  const params = useParams<Params>();
  const projectId = params.projectId ?? null;
  const tasks = useTasks({projectId, isArchive: false});

  return (
    <>
      <Header title={''} />
      <Tasks data={tasks} />
    </>
  );
}

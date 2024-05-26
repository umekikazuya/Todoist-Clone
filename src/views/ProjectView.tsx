import {Tasks} from '@/components/feature/task/Tasks';
import {Header} from '@/components/Layout';
import {useTasks} from '@/hook/useTasks';
import {useParams} from 'react-router-dom';

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

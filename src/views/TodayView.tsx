import { Tasks } from '@/components/feature/task/Tasks';
import {Header} from '@/components/Layout';
import { useTasks } from '@/hook/useTasks';

export default function TodayView(): React.ReactNode {
  const tasks = useTasks({projectId: null, isArchive: false});

  return (
    <>
      <Header title={'今日'} />
      <Tasks data={tasks} />
    </>
  );
}

import {AddTask} from '@/components/Task/AddTask';
import {Header} from '@/components/Layout';
import {Tasks} from '@/components/Task/Tasks';
import {useTasksByFilter} from '@/hook/useTasksByFilter';
import {useLocation} from 'react-router-dom';

const filterParameters: Record<string, 'inbox' | 'today' | 'next'> = {
  '/inbox': 'inbox',
  '/today': 'today',
  '/next': 'next',
};

export default function DefaultView(): JSX.Element {
  const location = useLocation();
  const filter = filterParameters[location.pathname] || 'inbox';
  const tasks = useTasksByFilter({variant: filter});

  return (
    <>
      <Header title={'今日'} />
      <Tasks data={tasks} />
      <AddTask />
    </>
  );
}

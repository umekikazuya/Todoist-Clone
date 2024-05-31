import {AddButton, List} from '@/components/Task';
import {Header} from '@/components/Layout';
import {useLocation} from 'react-router-dom';
import {useTasksByFilter} from '@/hook/useTasksByFilter';

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
      <Header
        title={
          filter === 'inbox'
            ? 'インボックス'
            : filter === 'today'
              ? '今日'
              : '近日予定'
        }
      />
      <List data={tasks} />
      <AddButton />
    </>
  );
}

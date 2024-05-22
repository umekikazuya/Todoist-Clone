import {useState} from 'react';
import { ProjectsProvider, TaskFilterProvider } from '@/components/provider';
import { Content, Header, Sidebar } from '@/components/layout';

export default function TodayView(): React.ReactNode {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <>
      <TaskFilterProvider>
        <ProjectsProvider>
          <main className={darkMode ? 'darkmode' : ''}>
            <Header
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <section className="content">
              <Sidebar />
              <Content />
            </section>
          </main>
        </ProjectsProvider>
      </TaskFilterProvider>
    </>
  );
}

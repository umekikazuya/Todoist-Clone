import { Content, Header, Sidebar } from '@/components/layout';
import { ProjectsProvider, TaskFilterProvider } from '@/components/provider';
import {useState} from 'react';

export default function ProjectView(): React.ReactNode {
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

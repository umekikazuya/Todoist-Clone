import {useState} from 'react';
import {ProjectsProvider, TaskFilterProvider} from '../provider';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';

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

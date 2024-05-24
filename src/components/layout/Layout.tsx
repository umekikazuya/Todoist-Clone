import { Outlet } from 'react-router-dom';
import {ProjectsProvider, TaskFilterProvider} from '../provider';
import {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <TaskFilterProvider>
      <ProjectsProvider>
        <main className={darkMode ? 'darkmode' : ''}>
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <section className="content">
            <Sidebar />
            <Outlet />
          </section>
        </main>
      </ProjectsProvider>
    </TaskFilterProvider>
  );
}

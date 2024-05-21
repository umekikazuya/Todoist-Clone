import './App.scss';
import {ProjectsProvider, TaskFilterProvider} from './components/provider';
import {useState} from 'react';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
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

export default App;

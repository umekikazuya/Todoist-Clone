import './App.scss';
import {ProjectsProvider, TaskFilterProvider} from './components/provider';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <>
      <TaskFilterProvider>
        <ProjectsProvider>
          <Header />
          <section className="content">
            <Sidebar />
            <Content />
          </section>
        </ProjectsProvider>
      </TaskFilterProvider>
    </>
  );
}

export default App;

import './App.scss';
import {FilterProvider} from './components/FilterProvider';
import {ProjectsProvider} from './components/ProjectsProvider';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <>
      <FilterProvider>
        <ProjectsProvider>
          <Header />
          <section className="content">
            <Sidebar />
            <Content />
          </section>
        </ProjectsProvider>
      </FilterProvider>
    </>
  );
}

export default App;

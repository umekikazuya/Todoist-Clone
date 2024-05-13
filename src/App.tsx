import './App.scss';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <>
      <Header />
      <section className="content">
        <Sidebar />
        <Content />
      </section>
    </>
  );
}

export default App;

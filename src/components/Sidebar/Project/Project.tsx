import {AddProject} from './AddProject';
import List from './List';
import Title from './Title';

export default function Project() {
  return (
    <>
      <div>
        <Title />
        <List />
        <AddProject />
      </div>
    </>
  );
}

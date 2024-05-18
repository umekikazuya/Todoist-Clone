import CurrentFilter from '../feature/TaskFilter/CurrentFilter';
import {Tasks} from '../feature/task/Tasks';

export default function Content(): JSX.Element {
  return (
    <div
      className="tasks"
      data-testid="tasks">
      <h2 data-testid="project-name">
        <CurrentFilter />: Todoist
      </h2>
      <Tasks />

      {/* <AddTask /> */}
    </div>
  );
}

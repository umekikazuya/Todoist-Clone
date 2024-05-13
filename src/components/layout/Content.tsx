
export default function Content(): JSX.Element {
  return (
    <div
      className="tasks"
      data-testid="tasks">
      {/* <h2 data-testid="project-name">{projectName}</h2> */}
      <h2 data-testid="project-name">Hoge</h2>

      <ul className="tasks__list">
        {/* {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox
              id={task.id}
              taskDesc={task.task}
            />
            <span>{task.task}</span>
          </li>
        ))} */}
      </ul>

      {/* <AddTask /> */}
    </div>
  );
}

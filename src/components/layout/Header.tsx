import {FaBalanceScaleLeft} from 'react-icons/fa';

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({darkMode, setDarkMode}: Props): JSX.Element {
  return (
    <header
      className="header"
      data-testid="header">
      <nav>
        <div className="logo">
          <FaBalanceScaleLeft />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  // setShowQuickAddTask(true);
                  // setShouldShowMain(true);
                }}>
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}>
                <FaBalanceScaleLeft />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      /> */}
    </header>
  );
}

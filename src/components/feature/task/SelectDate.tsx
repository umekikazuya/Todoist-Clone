import React from 'react';
import {FaRegPaperPlane, FaSpaceShuttle, FaSun} from 'react-icons/fa';

interface Props {
  setTaskDateValue: React.Dispatch<React.SetStateAction<string>>;
  showTaskDateOverlay: boolean;
  setShowTaskDateOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SelectDate({
  setTaskDateValue,
  showTaskDateOverlay,
  setShowTaskDateOverlay,
}: Props) {
  return (
    showTaskDateOverlay && (
      <div
        className="task-date"
        data-testid="task-date-overlay">
        <ul className="task-date__list">
          <li>
            <div
              onClick={() => {
                setShowTaskDateOverlay(false);
                setTaskDateValue(new Date().toLocaleDateString('en-GB'));
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDateOverlay(false);
                  setTaskDateValue(new Date().toLocaleDateString('en-GB'));
                }
              }}
              data-testid="task-date-today"
              tabIndex={0}
              aria-label="Select today as the task date"
              role="button">
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setShowTaskDateOverlay(false);
                setTaskDateValue(
                  new Date(Date.now() + 86400000).toLocaleDateString('en-GB'),
                );
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDateOverlay(false);
                  setTaskDateValue(
                    new Date(Date.now() + 86400000).toLocaleDateString('en-GB'),
                  );
                }
              }}
              data-testid="task-date-tomorrow"
              role="button"
              tabIndex={0}
              aria-label="Select tomorrow as the task date">
              <span>
                <FaSun />
              </span>
              <span>Tomorrow</span>
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setShowTaskDateOverlay(false);
                setTaskDateValue(
                  new Date(Date.now() + 7 * 86400000).toLocaleDateString(
                    'en-GB',
                  ),
                );
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDateOverlay(false);
                  setTaskDateValue(
                    new Date(Date.now() + 7 * 86400000).toLocaleDateString(
                      'en-GB',
                    ),
                  );
                }
              }}
              data-testid="task-date-next-week"
              aria-label="Select next week as the task date"
              tabIndex={0}
              role="button">
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Next week</span>
            </div>
          </li>
        </ul>
      </div>
    )
  );
}

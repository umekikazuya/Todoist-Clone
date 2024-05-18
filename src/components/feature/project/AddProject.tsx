import React, {useState, useCallback} from 'react';
import {firestore} from '@/firebase';
import {useProjects} from '@/hook/useProjects';

interface Props {
  shouldShow?: boolean;
}

const {VITE_USER_ID} = import.meta.env;

export const AddProject: React.FC<Props> = ({shouldShow = false}) => {
  const [visible, setVisible] = useState(shouldShow);
  const [projectValue, setProjectValue] = useState('');
  const {projects, setProjects} = useProjects(VITE_USER_ID);

  const addProject = useCallback(() => {
    if (!projectValue) return;
    firestore
      .collection('projects')
      .add({
        name: projectValue,
        userId: VITE_USER_ID,
      })
      .then((docRef) => {
        setProjects([
          ...projects,
          {
            id: docRef.id,
            docId: docRef.id,
            name: projectValue,
            userId: VITE_USER_ID,
          },
        ]);
        setProjectValue('');
        setVisible(false);
      });
  }, [projectValue, projects, setProjects]);

  return (
    <div
      className="add-project"
      data-testid="add-project">
      {visible && (
        <div
          className="add-project__input"
          data-testid="add-project-inner">
          <input
            value={projectValue}
            onChange={(e) => setProjectValue(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            type="button"
            onClick={() => addProject()}
            data-testid="add-project-submit">
            Add Project
          </button>
          <span
            aria-label="Cancel adding project"
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setVisible(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setVisible(false);
            }}
            role="button"
            tabIndex={0}>
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setVisible(!visible)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setVisible(!visible);
        }}
        role="button"
        tabIndex={0}>
        Add Project
      </span>
    </div>
  );
};

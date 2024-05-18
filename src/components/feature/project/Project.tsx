import {useState} from 'react';
import {Project as ProjectType} from '@/types';
import {FaTrashAlt} from 'react-icons/fa';
import {useProjectsContext} from '@/context/hook';
import {firestore} from '@/firebase';

export default function Project({data}: {data: ProjectType}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const {projects, setProjects} = useProjectsContext();

  const deleteProject = (id: string) => {
    firestore
      .collection('projects')
      .doc(id)
      .delete()
      .then(() => {
        setProjects([...projects]);
      });
  };

  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{data.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!showConfirm)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowConfirm(!showConfirm);
        }}
        tabIndex={0}
        role="button"
        aria-label="Confirm deletion of project">
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(data.docId)}>
                Delete
              </button>
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowConfirm(!showConfirm);
                }}
                tabIndex={0}
                role="button"
                aria-label="Cancel adding project, do not delete">
                Cancel
              </span>
            </div>
          </div>
        )}
      </span>
    </>
  );
}

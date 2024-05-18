import {firestore} from '@/firebase';
import {Task as TaskType} from '@/types';

export default function Task({data}: {data: TaskType}) {
  // Set archive.
  const archiveTask = () => {
    firestore
      .collection('tasks')
      .doc(data.id)
      .update({
        archived: true,
      })
      .then(() => {
        // No script.
      })
      .catch(() => {
        // No script.
      });
  };

  return (
    <li key={data.id}>
      <div
        role="button"
        tabIndex={0}
        className="checkbox-holder"
        data-testid="checkbox-action"
        onClick={() => archiveTask()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') archiveTask();
        }}>
        <span className="checkbox" />
      </div>
      <span>{data.name}</span>
    </li>
  );
}

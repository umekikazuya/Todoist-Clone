import 'firebase/firestore';
import {firestore} from '@/firebase';
import {Task} from '@/model';
import {useState, useEffect} from 'react';

const {VITE_USER_ID} = import.meta.env;

export const useTasks = ({
  projectId,
  isArchive = false,
}: {
  projectId: string|null,
  isArchive: boolean;
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('tasks')
      .where('userId', '==', VITE_USER_ID)
      .where('projectId', '==', projectId ?? '')
      .where('archived', '==', isArchive)
      .onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Task, 'id'>),
        }));

        setTasks(newTasks);
      });

    return () => unsubscribe();
  }, [projectId, isArchive]);

  return tasks;
};

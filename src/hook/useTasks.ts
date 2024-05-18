import 'firebase/firestore';
import {firestore} from '@/firebase';
import {Task} from '@/types';
import {useState, useEffect} from 'react';

const {VITE_USER_ID} = import.meta.env;

export const useTasks = (filter: string) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('tasks')
      .where('userId', '==', VITE_USER_ID)
      .onSnapshot((snapshot) => {
        const newTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Task),
        }));

        setTasks(newTasks);
      });

    return () => unsubscribe();
  }, [filter]);

  return tasks;
};

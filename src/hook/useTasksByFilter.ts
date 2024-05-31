import {firestore} from '@/firebase';
import type {Task} from '@/model';
import {useState, useEffect} from 'react';
import {Timestamp} from 'firebase/firestore';

const {VITE_USER_ID} = import.meta.env;

type FilterProps = {
  variant: 'inbox' | 'today' | 'next';
};

export const useTasksByFilter = ({variant}: FilterProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);
  const sevenDaysLater = new Date(today);
  sevenDaysLater.setDate(sevenDaysLater.getDate() + 7);

  useEffect(() => {
    let query = firestore
      .collection('tasks')
      .where('userId', '==', VITE_USER_ID)
      .where('archived', '==', false);
    // .orderBy('date', 'asc');

    switch (variant) {
      case 'inbox':
        // No additional filtering for inbox.
        break;
      case 'today':
        query = query
          .where('date', '>=', Timestamp.fromDate(today))
          .where('date', '<', Timestamp.fromDate(tomorrow));
        break;
      case 'next':
        query = query
          .where('date', '>=', Timestamp.fromDate(today))
          .where('date', '<', Timestamp.fromDate(tomorrow));
        break;
    }

    const unsubscribe = query.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Task, 'id'>),
      }));

      setTasks(newTasks);
    });

    return () => unsubscribe();
  });

  return tasks;
};

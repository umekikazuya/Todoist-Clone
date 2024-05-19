import {firestore} from '@/firebase';
import {Project} from '@/types';
import {useEffect, useState} from 'react';

export const useProjects = (userId: string) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('projects')
      .where('userId', '==', userId)
      .onSnapshot((snapshot) => {
        const fetchedProjects = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Project, 'id'>),
        }));
        
        setProjects(fetchedProjects);
      });

    return () => unsubscribe();
  }, [userId]);

  return {projects, setProjects};
};

import {firestore} from '@/firebase';
import {Project} from '@/types';
import {useEffect, useState} from 'react';

export const useProjects = (userId: string) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('projects')
      .where('userId', '==', userId)
      .orderBy('projectId')
      .onSnapshot((snapshot) => {
        const fetchedProjects = snapshot.docs.map((doc) => ({
          ...(doc.data() as Project),
          docId: doc.id,
        }));
        setProjects(fetchedProjects);
      });

    return () => unsubscribe();
  }, [userId]);

  return {projects, setProjects};
};

import {firestore} from '@/firebase';
import {Project} from '@/model';
import {useEffect, useState} from 'react';

interface UseProjects {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export const useProjects = (userId: string): UseProjects => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('projects')
      .where('userId', '==', userId)
      .onSnapshot(
        (snapshot) => {
          const fetchedProjects = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Project, 'id'>),
          }));

          setProjects(fetchedProjects);
          setLoading(false);
        },
        () => {
          setError('Failed to fetch projects.');
          setLoading(false);
        },
      );

    return () => unsubscribe();
  }, [userId]);

  return {projects, loading, error};
};

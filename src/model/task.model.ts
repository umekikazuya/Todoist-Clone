import type {Timestamp} from 'firebase/firestore';

export type Task = {
  id: string;
  docId: string;
  name: string;
  projectId: string;
  date: Timestamp;
  archived: boolean;
};

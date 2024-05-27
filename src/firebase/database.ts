import {firestore} from './config';
import {Project} from '@/model';

// プロジェクト
export const getProject = async (
  projectId: string,
): Promise<Project | null> => {
  try {
    const projectDoc = await firestore
      .collection('projects')
      .doc(projectId)
      .get();
    if (projectDoc.exists) {
      return {id: projectDoc.id, ...projectDoc.data()} as Project;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Failed to fetch project. error');
  }
};

// タスクを取得する関数
export const getTasks = async (userId: string) => {
  const snapshot = await firestore
    .collection('tasks')
    .where('userId', '==', userId)
    .get();
  const tasks = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return tasks;
};

// タスクを追加する関数
export const addTask = async (task: {
  title: string;
  description: string;
  dueDate: Date;
  userId: string;
}) => {
  const docRef = await firestore.collection('tasks').add(task);

  return docRef.id;
};

// タスクを更新する関数
export const updateTask = async (taskId: string, updates: Object) => {
  await firestore.collection('tasks').doc(taskId).update(updates);
};

// タスクを削除する関数
export const deleteTask = async (taskId: string) => {
  await firestore.collection('tasks').doc(taskId).delete();
};

// プロジェクトを取得する関数
export const getProjects = async (userId: string) => {
  const snapshot = await firestore
    .collection('projects')
    .where('userId', '==', userId)
    .get();
  const projects = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, 'id'>),
  }));

  return projects;
};

// 特定のプロジェクトのタスクを取得する
export const getProjectById = async (
  projectId: string,
): Promise<Project | null> => {
  try {
    const projectDoc = await firestore
      .collection('projects')
      .doc(projectId)
      .get();
    if (projectDoc.exists) {
      return {id: projectDoc.id, ...projectDoc.data()} as Project;
    } else {
      console.error('No project found with the given ID');
      return null;
    }
  } catch (error) {
    console.error('Error fetching project:', error);
    throw new Error('Failed to fetch project.');
  }
};

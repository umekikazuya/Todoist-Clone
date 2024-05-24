import {Project} from '@/model';
import { firestore } from './config';

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
export const getTasksByProject = async (projectId: string, userId: string) => {
  const snapshot = await firestore
    .collection('tasks')
    .where('projectId', '==', projectId)
    .where('userId', '==', userId)
    .get();
  const tasks = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return tasks;
};

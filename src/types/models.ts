export type Project = {
  docId: string,
  name: string,
  projectId: string,
  userId: string,
};

export type Task = {
  id: string,
  docId: string,
  name: string;
  projectId: string;
  date: string;
  archived: boolean;
};

export type User = {
  docId: string,
  firstName: string;
  lastName: string;
  twitter: string;
  userId: string;
};

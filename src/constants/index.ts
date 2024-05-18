export interface TaskFilter {
  key: string;
  name: string;
}

export const taskFilters: TaskFilter[] = [
  { key: 'inbox', name: 'Inbox' },
  { key: 'today', name: 'Today' },
  { key: 'week', name: 'Next 7 Days' },
];

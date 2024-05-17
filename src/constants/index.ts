export interface FilterItem {
  key: string;
  name: string;
}

export const filterItems: FilterItem[] = [
  { key: 'inbox', name: 'Inbox' },
  { key: 'today', name: 'Today' },
  { key: 'week', name: 'Next 7 Days' },
];

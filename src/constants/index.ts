export interface FilteredItem {
  key: string;
  name: string;
}

export const filteredItems: FilteredItem[] = [
  { key: 'inbox', name: 'Inbox' },
  { key: 'today', name: 'Today' },
  { key: 'week', name: 'Next 7 Days' },
];

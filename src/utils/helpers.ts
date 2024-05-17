import {FilterItem, filterItems} from '@/constants';
import {Project} from '@/types';

// ProjectIdからProjectItemを取得.
export const getProject = (
  projects: Project[],
  projectId: string,
): Project | undefined =>
  projects.find((project) => project.projectId === projectId);

// フィルタリングの対象を取得. 例：inbox、today、week.
export const getFilteredItem = (filteringValue: string): FilterItem | undefined =>
  filterItems.find((task) => task.key === filteringValue);

// フィルタリング中のItemのラベル名を出力. 例：INBOX、Today、Next 7 Days.
export const getFilterLabel = (filteringValue: string): string | undefined =>
  filterItems.find((task) => task.key === filteringValue)?.name;

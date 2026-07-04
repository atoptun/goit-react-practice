import type { AppState } from '@/types';

export const getTasks = (state: AppState) => state.tasks.items;

export const getStatusFilter = (state: AppState) => state.filters.state;

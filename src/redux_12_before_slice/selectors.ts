import type { AppState } from '@/types';

export const getTasks = (state: AppState) => state.tasks;

export const getStatusFilter = (state: AppState) => state.filters.state;

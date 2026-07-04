// Lesson 10, 11, 12

export interface TaskInterface {
  id: string;
  text: string;
  completed: boolean;
}

export interface TasksState {
  items: TaskInterface[];
}

export type FilterValue = 'all' | 'active' | 'completed';

export interface FilterState {
  state: FilterValue;
}

export interface AppState {
  tasks: TasksState;
  filters: FilterState;
}

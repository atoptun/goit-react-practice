import { useReducer } from 'react';

interface Todo {
  id: number;
  text: string;
}

interface State {
  draft: string;
  todos: Todo[];
}

interface ChangedDraftAction {
  type: 'changed_draft';
  nextDraft: string;
}

interface AddedTodoAction {
  type: 'added_todo';
}

type Action = ChangedDraftAction | AddedTodoAction;

function createInitialState(username: string): State {
  const initialTodos: Todo[] = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1),
    });
  }
  return {
    draft: '',
    todos: initialTodos,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'changed_draft': {
      return {
        ...state,
        draft: action.nextDraft,
      };
    }
    case 'added_todo': {
      return {
        draft: '',
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
    default: {
      const exhaustiveCheck: never = action;
      throw new Error(`Unknown action: ${exhaustiveCheck}`);    }
  }
}

interface TodoListProps {
  username: string;
}

export default function TodoList({ username }: TodoListProps) {
  const [state, dispatch] = useReducer(reducer, username, createInitialState);
  return (
    <>
      <input
        value={state.draft}
        onChange={e => {
          dispatch({
            type: 'changed_draft',
            nextDraft: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'added_todo' });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}

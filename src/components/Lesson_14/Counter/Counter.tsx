import { useReducer } from 'react';

interface State {
  value: number;
}

interface Action {
  type: 'inc' | 'dec' | 'reset';
}

const initialState: State = {
  value: 10,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'inc':
      return {
        value: state.value + 1,
      };
    case 'dec':
      return {
        value: state.value - 1,
      };
    case 'reset':
      return {
        value: initialState.value,
      };

    default:
      throw new Error('Unknown state');
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>useReducer</p>
      <p>Extra counter:</p>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      <input type="number" readOnly value={state.value} width="20px" />
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
}
export default Counter;

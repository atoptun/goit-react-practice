import { useReducer } from 'react';


interface State {
  value: number;
}

interface Action {
  type: 'inc' | 'dec' | 'reset';
}

const initialState: State = {
  value: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'inc':
      return {
        value: state.value++,
      };
    case 'dec':
      return {
        value: state.value--,
      };
    case 'reset':
      return {
        value: initialState.value,
      };

    default:
      throw new Error('Unknown state');
  }
};



function Lesson_14() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Lesson_14</h1>
      <p>useReducer</p>
      <p>Extra counter:</p>
      <button onClick={() => dispatch({ type: 'dec' })}>-</button>
      <input type="number" readOnly value={state.value} />
      <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  );
}
export default Lesson_14;

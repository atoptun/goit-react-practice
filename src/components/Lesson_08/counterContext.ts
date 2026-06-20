import { createContext, useContext } from 'react';

const defaultValue = {
  counter: 0,
};

interface CounterContextType {
  counter: number;
}

export const counterContext = createContext<CounterContextType>(defaultValue);

export const useCounterContext = () => useContext(counterContext);

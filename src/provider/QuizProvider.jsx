import React, { useReducer } from "react";
import { QuizContext } from "../context";
import { initalState, QuizReducers } from "../reducers/QuizReducers";
export default function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(QuizReducers, initalState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

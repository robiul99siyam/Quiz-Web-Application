import { useContext } from "react";
import { QuizContext } from "../context";

export default function useQuiz() {
  return useContext(QuizContext);
}

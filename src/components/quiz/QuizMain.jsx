import axios from "axios";
import React, { useEffect } from "react";
import { actions } from "../../actions";
import useQuiz from "../../hooks/useQuiz";
import QuizCard from "./QuizCard";

export default function QuizMain() {
  const { state, dispatch } = useQuiz();

  useEffect(() => {
    const quizDataFetch = async () => {
      try {
        dispatch({
          type: actions.quiz.DATA_FETCHING,
        });
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/quizzes`
        );
        // console.log(response.data);
        if (response.status === 200) {
          dispatch({
            type: actions.quiz.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    quizDataFetch();
  }, []);
  const quizs = state?.quizs;

  return (
    <main className="bg-white p-6 rounded-md h-full">
      <section>
        <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

        {/* quiz card  */}
        {quizs?.data?.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </section>
    </main>
  );
}

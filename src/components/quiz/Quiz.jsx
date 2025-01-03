import axios from "axios";
import React, { useEffect } from "react";
import useQuiz from "../../hooks/useQuiz";

export default function Quiz() {
  const { state } = useQuiz();
  useEffect(() => {
    const quizGETED = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/admin/quizzes"
      );
      console.log(response.data);
    };
    quizGETED();
  }, []);
  return (
    <main clasName="max-w-8xl mx-auto h-[calc(100vh-10rem)]">
      <div clasName="grid grid-cols-1 lg:grid-cols-3 gap-10 h-full">
        <h1>e</h1>
      </div>
    </main>
  );
}

import React from "react";
import QuizCard from "./QuizCard";

export default function QuizMain() {
  return (
    <main className="bg-white p-6 rounded-md h-full">
      <section>
        <h3 className="text-2xl font-bold mb-6">Participate In Quizees</h3>

        {/* quiz card  */}
        <QuizCard />
      </section>
    </main>
  );
}

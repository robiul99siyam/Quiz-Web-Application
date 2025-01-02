import React from "react";
import { Link } from "react-router-dom";
import BackGroudImage from "../../assets/backgrounds/2.jpg";
import useToken from "../../hooks/useToken";
export default function QuizCard() {
  const token = useToken();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Link
        to={token ? "" : "/login"}
        className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-h-[450px] relative group cursor-pointer"
      >
        <div className="group-hover:scale-105 absolute transition-all text-white  text-center top-1/2 -translate-y-1/2 px-4">
          <h1 className=" text-5xl">JavaScript Basic Quiz</h1>
          <p className="mt-2 text-lg">
            Test your knowledge of JavaScript basics with quizzes that cover
            essential concepts, syntax, and foundational programming skills
          </p>
        </div>
        <div className="hidden absolute transition-all bg-black/80 w-full h-full left-0 top-0 text-white group-hover:grid place-items-center">
          <div>
            <h1 className="text-3xl font-bold">Already Participated</h1>
            <p className="text-center">Click to view your leaderboard</p>
          </div>
        </div>
        <img
          src={BackGroudImage}
          alt="JavaScript Hoisting"
          className="w-full h-full object-cover rounded mb-4"
        />
      </Link>
    </div>
  );
}

import React from "react";

export default function QuizAttend() {
  return (
    <div clasName="lg:col-span-1 bg-white rounded-md p-6 h-full flex flex-col">
      <div>
        <h2 clasName="text-4xl font-bold mb-4"></h2>
        <p clasName="text-gray-600 mb-4">
          A quiz on React hooks like useState, useEffect, and useContext.
        </p>

        <div clasName="flex flex-col">
          <div clasName="w-fit bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
            Total number of questions : 10
          </div>

          <div clasName="w-fit bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
            Participation : 1
          </div>

          <div clasName="w-fit bg-gray-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full inline-block mb-2">
            Remaining : 9
          </div>
        </div>
      </div>

      <div clasName="mt-auto flex items-center">
        <img
          src="./assets/avater.webp"
          alt="Mr Hasan"
          clasName="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span clasName="text-black font-semibold">Saad Hasan</span>
      </div>
    </div>
  );
}

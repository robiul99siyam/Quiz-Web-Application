import React from "react";
import avtarImage from "../../assets/avater.webp";
export default function UserWelcome() {
  return (
    <div className="text-center mb-12">
      <img
        src={avtarImage}
        alt="Profile Picture"
        className="w-32 h-32 rounded-full border-4 border-primary mx-auto mb-4 object-cover"
      />
      <p className="text-xl text-gray-600">Welcome</p>
      <h2 className="text-4xl font-bold text-gray-700">Saad Hasan</h2>
    </div>
  );
}

import React from "react";
import img from "../../Images/sd.png"

export default function Learning() {
  return (
    <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-green-600 uppercase text-sm font-semibold">
          What You'll Learn
        </p>
        <h1 className="text-3xl font-bold mt-2 leading-tight">
          Empower Your Skills: <br /> Unveiling the Proficiencies <br /> You'll Master
        </h1>
        <p className="mt-4 text-gray-600">
          By the end of this course, you'll be able to:
        </p>
        <ul className="mt-4 space-y-2 text-lg text-gray-700">
          <li>✅ Develop a comprehensive marketing strategy</li>
          <li>✅ Utilize various digital marketing channels effectively</li>
          <li>✅ Analyze and interpret marketing data for informed decisions</li>
          <li>✅ Optimize campaigns for maximum impact</li>
          <li>✅ Implement advanced marketing tactics to stay ahead</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <img 
          src={img}
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
}

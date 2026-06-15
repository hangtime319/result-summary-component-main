import React from "react";

const ScorePanel = () => {
  return (
    <article className="bg-linear-to-b from-(--color-violet-blue)/90 to-(--color-persian-blue) text-white text-center py-8 px-12 rounded-2xl w-1/2 max-sm:w-full max-sm:rounded-t-none">
      <h1 className="text-(--color-light-lavender) font-medium">Your Result</h1>
      <div className="circle bg-linear-to-b from-(--color-persian-blue) to-(--color-violet-blue)/5 w-40 h-40 flex flex-col items-center justify-center rounded-full mx-auto my-4">
        <span className="text-6xl font-bold">76</span>
        <span className="text-(--color-light-lavender)/50 leading-relaxed text-sm">of 100</span>
      </div>
      <h2 className="text-2xl">Great</h2>
      <p className="text-(--color-light-lavender) font-light text-sm text-center mt-2">You scored higher than 65% of the people who have taken these tests.</p>
    </article>
  );
};

export default ScorePanel;

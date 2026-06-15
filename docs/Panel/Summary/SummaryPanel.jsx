import React from "react";
import ContinueButton from "./ContinueButton";

const categoryStyles = {
  Reaction: { icon: "icon-reaction", text: "text-(--color-light-red)", bg: "bg-(--color-light-red)/10" },
  Memory:   { icon: "icon-memory", text: "text-(--color-orangey-yellow)", bg: "bg-(--color-orangey-yellow)/10" },
  Verbal:   { icon: "icon-verbal", text: "text-(--color-green-teal)", bg: "bg-(--color-green-teal)/10" },
  Visual:   { icon: "icon-visual", text: "text-(--color-light-slate-blue)", bg: "bg-(--color-light-slate-blue)/10" },
};

const SummaryPanel = ({ categories }) => {
  return (
    <article className="p-6 w-1/2 max-sm:w-full">
      <h2 className="text-(--color-dark-gray-blue) font-medium my-2 ">Summary</h2>
      <div className="space-y-4 mt-2 text-sm">
        {categories && categories.map(cat => {
          const style = categoryStyles[cat.category] || {};
          return (
            <div key={cat.category} className={`flex justify-between items-center ${style.bg} p-3 rounded-xl`}>
              <span className={`${style.text} font-semibold flex items-center ${style.icon}`}>
                {cat.category}
              </span>
              <span className="font-bold text-(--color-dark-gray-blue)">
                {cat.score} <span className="text-(--color-light-lavender)"> / 100</span>
              </span>
            </div>
          );
        })}
      </div>
      <ContinueButton />
    </article>
  );
};

export default SummaryPanel;

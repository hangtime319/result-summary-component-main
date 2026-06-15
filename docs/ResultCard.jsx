import React from "react";
import ScorePanel from "./Panel/ScorePanel";
import SummaryPanel from "./Panel/Summary/SummaryPanel";

const ResultCard = ({categories}) => {
  return (
    <section className="flex m-auto bg-white rounded-2xl w-4/5  overflow-hidden shadow-2xl max-sm:flex-col max-sm:items-center max-sm:w-full max-sm:rounded-none">
      <ScorePanel />
      <SummaryPanel categories={categories} />
    </section>

  );
};

export default ResultCard;

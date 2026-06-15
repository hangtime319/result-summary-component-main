import React from "react";
import data from "../data.json";
import ResultCard from "./ResultCard";

const ResultPage = () => {
  return <ResultCard categories={data.categories} />;
};

export default ResultPage;

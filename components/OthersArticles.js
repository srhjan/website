import React from "react";
import ArticleOverview from "../components/ArticleOverview";

export default () => {
  return (
    <div className="bg-gray-200 w-full flex" style={{ height: 470 }}>
      <div className="flex flex-col w-full">
        <h2
          className="w-full text-center text-pink-500 mt-12"
          style={{ fontSize: 40 }}
        >
          D'autres articles
        </h2>
        <div className="flex w-full justify-around mt-12">
          <ArticleOverview />
          <ArticleOverview />
          <ArticleOverview />
          <ArticleOverview />
        </div>
      </div>
    </div>
  );
};

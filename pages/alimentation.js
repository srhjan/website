import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Title from "../components/Title";
import DescPage from "../components/DescPage";
import ArticleOverview from "../components/ArticleOverview";
import OthersArticles from "../components/OthersArticles";

export default () => {
  return (
    <div>
      <Menu />
      <Banner
        imgBanner="/alimentation-mew.jpg"
        title="L'alimentation pour chat"
      />
      <Title>De quoi allons-nous parler ?</Title>
      <DescPage>
        <p className="justify-center" style={{ margin: 15 }}>
          Par définition, un chat est un être à part qui passe le plus clair de
          son temps à manger et à dormir. Mais par moment (et va savoir
          pourquoi), il lui arrive de faire des trucs vraiment bizarres.
        </p>
        <p className="justify-center" style={{ margin: 15 }}>
          Chaque chat est différent et les comportements ne sont pas forcément
          les mêmes pour tous. Cependant, certains restent assez communs et
          c'est, à travers ces articles et mon expériences avec Mew, que je vais
          tenter de les expliquer.
        </p>
      </DescPage>
      <div
        className="flex mb-20 mt-20"
        style={{
          justifyContent: "space-evenly",
          width: "100%"
        }}
      >
        <ArticleOverview />
        <ArticleOverview />
        <ArticleOverview />
        <ArticleOverview />
      </div>
      <OthersArticles />
    </div>
  );
};

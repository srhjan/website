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
      <Banner imgBanner="/mew-jouet.jpg" title="Les jouets pour chat" />
      <Title>De quoi allons-nous parler ?</Title>
      <DescPage>
        <p className="justify-center" style={{ margin: 15 }}>
          Depuis que j'ai adopté Mew, je suis en quête de jouets pour m'amuser
          avec elle. Je pense que la majorité des propriétaires de chats s'est
          retrouvée dans la même situation que moi : le carton était plus fun
          que le jouet en lui-même &#128529;
        </p>
        <p className="justify-center" style={{ margin: 15 }}>
          Ces articles vont donc abordés les différents jouets que j'ai pu
          tester, qu'ils soient achetés, fabriqués ou transformés. Bien sûr, ce
          qui marche pour l'un ne marche pas forcément pour l'autre &#128521;
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

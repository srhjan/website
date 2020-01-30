import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const TopArticles = () => {
  return (
    <div
      className=" bg-white rounded shadow-md border-t-8 border-blue-600"
      style={{ height: 300, width: 200 }}
    ></div>
  );
};

const Description = ({ children }) => {
  return (
    <p className="content-center" style={{ margin: 15 }}>
      {children}
    </p>
  );
};

export default () => {
  return (
    <div>
      <Menu />
      <Banner imgBanner="/chat-mew.jpg" title="Bienvenue dans la Mewsphère" />
      <h1 className="text-center text-black mt-12" style={{ fontSize: 40 }}>
        Top 3 des articles les plus lus
      </h1>
      <div className="w-full flex" style={{ height: 415 }}>
        <div
          className="flex"
          style={{
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: 30
          }}
        >
          <TopArticles />
          <TopArticles />
          <TopArticles />
        </div>
      </div>
      <div
        className="bg-gray-200 w-full flex items-center"
        style={{ height: 300 }}
      >
        <div className="flex content-center flex-col items-center w-1/2">
          <h2
            className="text-pink-500 text-center leading-tight"
            style={{ fontSize: 40, padding: "10px 40px" }}
          >
            Le chat le plus mignon de la semaine !
          </h2>

          <p className="text-black mt-4" style={{ fontSize: 20 }}>
            Cette semaine, le grand vainqueur est Mew alias Poupoune :)
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div
            className="bg-white shadow-md"
            style={{ height: 325, width: 325, borderRadius: "50%" }}
          ></div>
        </div>
      </div>
      <div className="w-full flex flex-col my-12">
        <div className="w-full flex items-center justify-center">
          <h2 className=" " style={{ fontSize: 30, fontWeight: 950 }}>
            Pourquoi un blog pour les chats ?
          </h2>
        </div>
        <div className="w-full">
          <Description>
            L’idée de ce blog m’est venue après avoir vécu un an avec un chat
            ainsi, les différents articles rédigés résultent de ma propre
            expérience avec mon chat, Mew. Sachez que chaque sujet abordé n’est
            pas forcément applicable à tous les chats et comme le dit si bien
            une expression, les goûts et les couleurs ne se discutent pas. Il ne
            s’applique pas que pour les humains, il en va de même pour les
            chats.
          </Description>
          <Description>
            L’objectif de ce blog est de partager mes expériences mais n’ayant
            pas la science infuse sur les chats, j’aimerai également que vous
            partagiez votre propre expérience sur les sujets abordés. Ca
            permettra d’obtenir davantage d’informations et de pouvoir avoir des
            articles plus complets et proposer diverses solutions auxquelles je
            n’aurais pas forcément pensé. Pour cela, et si vous le souhaitez
            (bien évidemment), n’hésitez pas à laisser des commentaires ou à
            m’envoyer, via le formulaire, votre expérience, vos autres solutions
            à tel problème…
          </Description>
          <Description>
            En tout cas, j’espère que ce blog vous aidera et vous plaira ! Mew
            et moi-même vous souhaitons une bonne lecture et à bientôt dans la
            Miaousphère ;)
          </Description>
        </div>
      </div>
      <div className="bg-gray-200 w-full flex" style={{ height: 470 }}>
        <div className="flex flex-col w-full">
          <h2
            className="w-full text-center text-pink-500 mt-12"
            style={{ fontSize: 40 }}
          >
            D'autres articles
          </h2>

          <div className="flex w-full justify-around mt-12">
            <TopArticles />
            <TopArticles />
            <TopArticles />
            <TopArticles />
          </div>
        </div>
      </div>
    </div>
  );
};

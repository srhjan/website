import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const PresentationHeading = ({ children }) => {
  return (
    <div
      className="tracking-wider justify-center font-bold"
      style={{
        fontSize: 15,
        margin: 15,
        boxSizing: "content-box"
      }}
    >
      {children}
    </div>
  );
};

const PresentationDesc = ({ children }) => {
  return (
    <div
      className=" justify-center tracking-wider"
      style={{
        fontSize: 15,
        margin: 15,
        boxSizing: "content-box"
      }}
    >
      {children}
    </div>
  );
};

const BlockPresentation = ({ children, presentationImg }) => {
  return (
    <div
      className="w-full flex"
      style={{
        maxWidth: "100%"
      }}
    >
      <div
        className="flex w-full "
        style={{
          marginTop: 30,
          justifyContent: "space-evenly"
        }}
      >
        <div className="rounded w-1/3">
          <div style={{ margin: "0 30px" }}>
            <img
              src={presentationImg}
              className="h-full w-full flex object-cover shadow-md"
              style={{ height: 415 }}
            />
          </div>
        </div>
        <div
          className="bg-white shadow-md rounded w-2/3"
          style={{
            padding: "0 30px"
          }}
        >
          <div
            className="justify-center tracking-wider"
            style={{
              fontSize: 15,
              margin: 15,
              boxSizing: "content-box"
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div>
      <Menu />
      <Banner imgBanner="/team-cat.jpg" title="La Team Cat" />

      <h2 className="text-black text-center text-3xl mt-8 mb-2">
        Mais qui ce cache derrière ce blog ?
      </h2>

      <BlockPresentation presentationImg="/sarah-team-cat.jpg">
        J’ai 25 ans et je suis la créatrice et rédactrice de ce blog. Toujours
        de bonne humeur et souriante (sauf le lundi), je suis spécialisée dans
        le webmarketing et ce que j’adore particulièrement, c’est la rédaction
        (articles, histoire…).
        <PresentationHeading>Ce que j'aime :</PresentationHeading>
        <PresentationDesc>
          Le café, les animaux (surtout mon bébé Mew), les livres de Stephen
          King, le café, dormir, le café, le chocolat…
        </PresentationDesc>
        <PresentationHeading>Ce que je déteste:</PresentationHeading>
        <PresentationDesc>
          Les araignées, les lundis, le sport, me taper le petit orteil dans le
          coin d’un meuble, les fautes d’orthographe ou de français...
        </PresentationDesc>
        <PresentationHeading>Mes surnoms :</PresentationHeading>
        <PresentationDesc>
          Sar, Marin Monster (je râle beaucoup quand on me réveille tôt)
        </PresentationDesc>
      </BlockPresentation>

      <BlockPresentation presentationImg="/mew-team-cat.jpg">
        J’ai un an en année chat, ce qui fait que j’ai plus de 18 ans en année
        humaine. J’ai le pelage tigré gris et noir avec du blanc sur la partie
        inférieure de mon corps. Je suis très curieuse mais je suis aussi une
        grande peureuse.
        <PresentationHeading>Ce que j'aime :</PresentationHeading>
        <PresentationDesc>
          Manger, dormir, faire des bêtises, manger, dormir, jouer, m’endormir
          en plein milieu du lit et prendre toute la place, encore et toujours
          manger ! ...
        </PresentationDesc>
        <PresentationHeading>Ce que je déteste:</PresentationHeading>
        <PresentationDesc>
          Les gens, l’eau, obéir, me faire pousser du lit par mes maîtres quand
          ils dorment, le bruit de l’aspirateur...
        </PresentationDesc>
        <PresentationHeading>Mes surnoms :</PresentationHeading>
        <PresentationDesc>
          Ti’ Mewmew, Poupoune, ma Poune et encore pleins d’autres (oui, les
          humains adorent donner pleins de surnoms débiles à leurs animaux de
          compagnie).
        </PresentationDesc>
      </BlockPresentation>
    </div>
  );
};

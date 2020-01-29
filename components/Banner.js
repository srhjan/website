import React from "react";

export default ({ imgBanner, title }) => {
  return (
    <div
      className="relative flex"
      style={{
        height: 450
      }}
    >
      <img
        src={imgBanner}
        className="object-cover w-full h-full"
        style={{ filter: "brightness(70%)" }}
      />
      <div
        className="flex justify-center items-center w-full absolute"
        style={{
          marginTop: 15,
          marginBottom: 15,
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <div
          className="h-full flex justify-center items-center "
          style={{
            borderRadius: 10
          }}
        >
          <h1
            className="text-white font-light"
            style={{
              fontSize: 50,
              margin: "15px 20px"
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

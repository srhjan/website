import React from "react";
import ActiveLink from "../components/ActiveLink";

const NavLink = React.forwardRef((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      style={{
        padding: "20px 45px",
        cursor: "pointer",
        fontSize: 20
      }}
    >
      {props.children}
    </div>
  );
});

export default () => {
  return (
    <header
      className="absolute w-full z-10"
      style={{
        top: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        maxWidth: "100%"
      }}
    >
      <nav className="flex justify-center items-center text-white font-bold">
        <ActiveLink href="/" activeClassName="active">
          <NavLink>
            <img src="/home.png" style={{ width: 20 }} />
          </NavLink>
        </ActiveLink>
        <NavLink>Alimentation</NavLink>
        <NavLink>Comportement</NavLink>
        <NavLink>Jouets</NavLink>
        <ActiveLink href="/team-cat" activeClassName="text-pink-200">
          <NavLink>La team Cat</NavLink>
        </ActiveLink>
      </nav>
    </header>
  );
};

import React from "react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const NavStyle = styled.nav`
  display: flex;
  align-items: center;

  .newStyle {
    border: 0.1em solid #a1a1a1;
    padding: 1em;
    margin: 0.5em;
    text-decoration: none;
    color: #8a8a8a;
  }
`;

export default function TabNav() {

  return (
    <div>
      <NavStyle>
        <NavLink className="newStyle" to="/">
          Home
        </NavLink>
        <NavLink className="newStyle" to="/characters">
          Characters
        </NavLink>
        <SearchForm />
      </NavStyle>
      <Route exact path="/" component={WelcomePage} />
    </div>
  );
}

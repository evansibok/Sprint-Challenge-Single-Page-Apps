import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import styled from 'styled-components';


const NavStyle = styled.nav`
  display: flex;
  align-items: center;

  .newStyle {
    border: 1px solid #1ff;
    padding: 1em;
  }
`;


export default function TabNav() {

  return (
    <div>
      <NavStyle>
          <NavLink className="newStyle" to="/">Home</NavLink>
          <NavLink className="newStyle" to="/characters">Characters</NavLink>
      </NavStyle>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/" component={CharacterList}/>

    </div>
  )

}

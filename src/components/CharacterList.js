import React from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const ParentContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function CharacterList({ character }) {
  // debugger
  if(!character) { 
    return <div>Not here!</div> 
  }
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  return (
    <ParentContainer className="character-list">
      <>
        {character || character.map(char => {
            return <CharacterCard
            key={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            status={char.status}
            origin={char.origin.name}
            episode={char.episode}
            image={char.image}
          />
        })}
      </>
    </ParentContainer>
  );
}
export default CharacterList;
import React from "react";
import styled from 'styled-components';


const CardStyle = styled.div`
  border: 0.1em solid #8a8a8a;
  width: 310px;
  height: auto;
  margin: 1em;
`;

const ImageDiv = styled.div`
  max-width: auto;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const TextCon = styled.div`
  margin: 1em;
`;

function CharacterCard({ id, name, species, gender, status, origin, episode, image }) {

  return (

    <CardStyle key={id}>
      <ImageDiv>
        <img
          src={image}
          alt="characters headshot"
        />
      </ImageDiv>

      <TextCon>
        <h3>{name}</h3>

        <div>
          <h5>Species: {species}</h5>
          <h5>Gender: {gender}</h5>
          <h5>Status: {status}</h5>
        </div>

        <div>
          <h5>Origin: {origin}</h5>
          <h5>Episodes: {episode.length}</h5>
        </div>
      </TextCon>
    </CardStyle>
  )
}

export default CharacterCard;
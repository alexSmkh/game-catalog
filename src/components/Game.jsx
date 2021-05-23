/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image }) => (
  <StyledGame>
    <h3>{name}</h3>
    <p>{released}</p>
    <ImgWrapper>
      <img src={image} alt={name} />
    </ImgWrapper>
  </StyledGame>
);

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0 0 1rem 1rem;
  }
`;

const ImgWrapper = styled(motion.div)`
  width: 100%;
  height: 40vh;
`;

export default Game;

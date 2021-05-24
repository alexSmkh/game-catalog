/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import defaultLogo from '../img/game-controller.png';
import buildSmallImageURL from '../util';
import loadGameDetail from '../actions/gameDetailAction';

const Game = ({
  name,
  released,
  imageURL,
  id,
}) => {
  const imageWidth = 640;
  const gameImageURL = imageURL
    ? buildSmallImageURL(imageURL, imageWidth)
    : defaultLogo;

  const dispatch = useDispatch();
  const loadGameDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadGameDetail(id));
  };

  return (
    <StyledGame onClick={() => loadGameDetailHandler()}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <ImgWrapper>
          <img src={gameImageURL} alt={name} />
        </ImgWrapper>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;

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

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

  const gameId = String(id);
  return (
    <StyledGame layoutId={gameId} onClick={() => loadGameDetailHandler()}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${gameId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${gameId}`}
          src={gameImageURL}
          alt={name}
        />
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
  overflow: hidden;

  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Game;

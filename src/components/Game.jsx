/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import loadGameDetail from '../actions/gameDetailAction';

const Game = ({
  name,
  released,
  image,
  id,
}) => {
  const dispatch = useDispatch();
  const loadGameDetailHandler = () => {
    dispatch(loadGameDetail(id));
  };

  return (
    <StyledGame onClick={() => loadGameDetailHandler()}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <ImgWrapper>
          <img src={image} alt={name} />
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

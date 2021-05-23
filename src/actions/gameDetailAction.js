import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../api';

const loadGameDetail = (gameID) => async (dispatch) => {
  dispatch({
    type: 'LOADING_GAME_DETAIL',
  });

  const gameDetailResponse = await axios.get(gameDetailsURL(gameID));
  const gameScreenshotsResponse = await axios.get(gameScreenshotsURL(gameID));
  dispatch({
    type: 'GET_GAME_DETAIL',
    payload: {
      gameDetail: gameDetailResponse.data,
      gameScreenshots: gameScreenshotsResponse.data,
    },
  });
};

export default loadGameDetail;

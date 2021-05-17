import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';

// eslint-disable-next-line import/prefer-default-export
export const loadGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularGamesData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

const initState = { game: {}, screenshots: {} };

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_GAME_DETAIL':
      return {
        ...state,
        game: action.payload.gameDetail,
        screenshots: action.payload.gameScreenshots,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;

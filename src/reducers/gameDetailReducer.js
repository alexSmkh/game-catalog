const initState = { game: {}, screenshots: {}, isLoading: true };

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_GAME_DETAIL':
      return {
        ...state,
        game: action.payload.gameDetail,
        screenshots: action.payload.gameScreenshots,
        isLoading: false,
      };
    case 'LOADING_GAME_DETAIL':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;

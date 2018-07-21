
export default function reducer(state = {}, action) {
  switch (action.type) {
    case SCORE_INCREMENT:
      return { ...state, score: state.score + 10 };

    case GAME_OVER:
      return { ...state, showFinalScore: true };

    case GAME_RESET:
      return { ...state, score: 0 };

    default:
      return state;
  }
}
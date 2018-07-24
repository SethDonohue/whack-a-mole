
export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SCORE_INCREMENT':
      return { ...state, score: state.score + 10 };
    
    case 'TIMER_DECCREMENT':
      return { ...state, timer: state.timer - 1 };

    case 'GAME_OVER':
      return { ...state, showFinalScore: true };

    case 'GAME_RESET':
      console.log('Game Reset hit');
      return { ...state, score: 0, timer: 120 };

    default:
      return state;
  }
}
const initState = {
  movieData: null
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADED":
      return {
        ...state,
        movieData: action.payload
      };
    case "ERROR":
      alert(action.payload);
      return state;
    default:
      return state;
  }
};

export default rootReducer;

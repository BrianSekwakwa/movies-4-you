const initState = {
  movies: "some movies"
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SOMETHING":
      console.log("From redux action", action.payload);
      return state;
    default:
      return state;
  }
};

export default rootReducer;

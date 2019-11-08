export const loading = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "LOADING",
      payload: null
    });
  };
};

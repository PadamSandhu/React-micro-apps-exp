export const simpleAction = (payload = 'default load') => (dispatch) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: payload,
  });
};

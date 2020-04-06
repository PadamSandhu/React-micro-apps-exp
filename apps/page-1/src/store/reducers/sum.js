import { Types } from '../actions';

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.add:
      return { count: ++state.count };
    case Types.remove:
      return { count: --state.count };
    default:
      return state;
  }
};

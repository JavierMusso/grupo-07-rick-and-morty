import { GET_CHARACTERS, REMOVE_CHARACTER } from "./actions";

const initialState = [];

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      if (payload.length > 1) {
        return [...state, ...payload];
      }
      return [...state, payload];

    case REMOVE_CHARACTER:
      return state.filter((char) => char.id !== payload);

    default:
      return state;
  }
};

export default rootReducer;

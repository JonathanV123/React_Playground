import { createReducer } from "../../lib/utilities";

export const initialState = {
  data: "Poop"
};

export default createReducer(initialState, {
  MAKE_CHANGE_SUCCESS: (state, payload) => ({
    ...state,
    data: payload
  })
});

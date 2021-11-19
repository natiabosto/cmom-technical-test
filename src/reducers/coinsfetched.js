const initialState = {};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "coins/fetched":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const initialState = false;

export const onOffReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BULB_ON":
      return action.payload;
    case "BULB_OFF":
      return action.payload;
    default:
      return state;
  }
};

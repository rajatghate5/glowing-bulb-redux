export const BulbOn = () => {
  return {
    type: "BULB_ON",
    payload: true,
  };
};

export const BulbOff = () => {
  return {
    type: "BULB_OFF",
    payload: false,
  };
};

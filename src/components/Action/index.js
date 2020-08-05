const setUserInfo = (payload) => {
  return {
    type: "SET_USERINPUTS",
    payload,
  };
};

export const resetUserInfo = () => {
  return {
    type: "RESET_USERINPUTS",
  };
};

export default setUserInfo;

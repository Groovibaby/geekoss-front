const setUserInfo = (
  state = {
    inputs: {
      id: "",
      firstname: "",
      lastname: "",
      email: "",
      avatar: "",
      pseudo: "",
    },
  },
  action
) => {
  switch (action.type) {
    case "SET_USERINPUTS":
      return {
        ...state,
        inputs: {
          id: action.payload.id,
          firstname: action.payload.firstname,
          lastname: action.payload.lastname,
          email: action.payload.email,
          avatar: action.payload.avatar,
          pseudo: action.payload.pseudo,
        },
      };
    case "RESET_USERINPUTS":
      return {
        ...state,
        inputs: {
          id: null,
          firstname: null,
          lastname: null,
          email: null,
          avatar: null,
          pseudo: null,
        },
      };
    default:
      return state;
  }
};

export default setUserInfo;

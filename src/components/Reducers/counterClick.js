const initialState = {
  count: 0,
};

const ClickCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default ClickCounter;

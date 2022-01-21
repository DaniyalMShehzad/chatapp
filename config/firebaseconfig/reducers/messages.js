const INITIAL_STATE = {
    label: "user Data here",
    // userid: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "MESSAGES":
        state = action.payload;
        return state;
      default:
        return state;
    }
  };
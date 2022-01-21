const INITIAL_STATE = {
    label: "Login Reducer Here",
    // userid: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "USERS":
        // console.log(action.payload);
        state = action.payload;
        return state;
      default:
        return state;
    }
  };
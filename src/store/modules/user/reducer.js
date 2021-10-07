import { ADD_COMMENT } from "./actionTypes";

const stateInitial = { name: "kenzie", comments: [] };

const userReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return action.updateUser;
    }

    default:
      return state;
  }
};
export default userReducer;

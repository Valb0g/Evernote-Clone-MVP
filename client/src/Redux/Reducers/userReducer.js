/* eslint-disable default-param-last */
import defaultState from '../DefaultState/DefaultState';
import { ADD_USER, DEL_USER } from '../Types/Types';

const { users } = defaultState;
const userReducer = (state = users, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    case DEL_USER:
      return [];

    default:
      return state;
  }
};

export default userReducer;

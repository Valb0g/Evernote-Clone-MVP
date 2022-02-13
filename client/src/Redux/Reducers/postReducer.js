/* eslint-disable no-undef */
/* eslint-disable default-param-last */
import defaultState from '../DefaultState/DefaultState';
import {
  ADD_POST, ADD_SAGA, CLEAR_POSTS, DEL_POST, EDIT_POST, GET_ALL_POSTS,
} from '../Types/Types';

const { posts } = defaultState;
const postReducer = (state = posts, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.payload;
    case ADD_POST:
      return [...state, action.payload];
    case ADD_SAGA:
      return action.payload;
    case EDIT_POST:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            text: action.payload.text,
          };
        }
        return post;
      });
    case DEL_POST:
      return state.filter((post) => post.id !== action.payload);
    case CLEAR_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;

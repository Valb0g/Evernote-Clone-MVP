/* eslint-disable max-len */
import {
  ADD_POST, ADD_SAGA, ADD_USER, CLEAR_POSTS, DEL_POST, DEL_USER, EDIT_POST, GET_ALL_POSTS, SEARCH_SAGA,
} from '../Types/Types';
// Auth
export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});
export const delUser = () => ({
  type: DEL_USER,
});

// CRUD
export const getPosts = (payload) => ({
  type: GET_ALL_POSTS,
  payload,
});
export const clearPosts = (payload) => ({
  type: CLEAR_POSTS,
  payload,
});
export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});
export const editPost = (payload) => ({
  type: EDIT_POST,
  payload,
});
export const delPost = (payload) => ({
  type: DEL_POST,
  payload,
});
export const searchSagaPosts = (payload) => ({
  type: SEARCH_SAGA,
  payload,
});
export const addSagaPosts = (payload) => ({
  type: ADD_SAGA,
  payload,
});

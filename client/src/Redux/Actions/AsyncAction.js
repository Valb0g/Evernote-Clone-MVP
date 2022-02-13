import axios from 'axios';
import {
  addPost,
  addUser, delPost, delUser, editPost, getPosts,
} from './Actions';

export const getSignup = (userData) => async (dispatch) => {
  const dataFromBack = await axios.post('/users/signup', userData);
  dispatch(addUser(dataFromBack.data));
};
export const getLogin = (userData) => async (dispatch) => {
  const dataFromBack = await axios.post('/users/signin', userData);
  dispatch(addUser(dataFromBack.data));
};
export const checkAuth = () => async (dispatch) => {
  const dataFromBack = await axios('/users/check');
  dispatch(addUser(dataFromBack.data));
};
export const getLogout = () => async (dispatch) => {
  const dataFromBack = await axios('/users/signout');
  dispatch(delUser(dataFromBack.data));
};

export const getAllPosts = () => async (dispatch) => {
  const dataFromBack = await axios('/posts');
  dispatch(getPosts(dataFromBack.data.allNotes));
};
export const addNewPost = (postData) => async (dispatch) => {
  const dataFromBack = await axios.post('/posts/add', postData);
  dispatch(addPost(dataFromBack.data.newPost));
};
export const editThisPost = (id, input) => async (dispatch) => {
  const dataFromBack = await axios.put(`/posts/edit/${id}`, input);
  if (dataFromBack.data === 'OK') {
    dispatch(editPost({ id, title: input.title, text: input.text }));
  }
};
export const delThisPost = (id) => async (dispatch) => {
  const dataFromBack = await axios.delete(`/posts/delete/${id}`);
  if (dataFromBack.data === 'OK') {
    dispatch(delPost(id));
  }
};

import axios from 'axios';
import {
  call, put, debounce,
} from 'redux-saga/effects';
import { addSagaPosts } from '../Actions/Actions';
import { SEARCH_SAGA } from '../Types/Types';

const postFetch = (word) => axios.post('/posts', { word })
  .then((res) => res.data.posts);

function* searchSagaWorker(action) {
  try {
    const posts = yield call(postFetch, action.payload);
    yield put(addSagaPosts(posts));
  } catch (e) {
    yield put(addSagaPosts([{ id: 1, word: 'error' }]));
  }
}

function* searchSagaWatcher() {
  yield debounce(500, SEARCH_SAGA, searchSagaWorker);
}

export default searchSagaWatcher;

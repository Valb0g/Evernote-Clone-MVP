import { all } from 'redux-saga/effects';
import searchSagaWatcher from './SearchPostSaga';

export default function* rootSaga() {
  yield all([
    searchSagaWatcher(),
  ]);
}

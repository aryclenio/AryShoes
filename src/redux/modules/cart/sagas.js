import api from '../../../services/api';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { addToCartSuccess } from './actions';
//GENERATOR - Se assemelha a async await
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSuccess(response.data));
}

export default all([
  //previne que o usuario clique varias vezes no evento
  //toma somente o ultimo evento
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);

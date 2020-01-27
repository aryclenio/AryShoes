import api from '../../../services/api';
import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../util/format';
//GENERATOR - Se assemelha a async await
function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );
  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([
  //previne que o usuario clique varias vezes no evento
  //toma somente o ultimo evento
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);

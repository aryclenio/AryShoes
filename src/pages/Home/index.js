/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../redux/modules/cart/actions';
import Product from '../../components/Product';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [dolarPrices, setDolarPrices] = useState([]);
  // utilizando redux com o hooks, sem o connect
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  // utilizando dispach do redux em um componente funcional
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        // Copia o objeto de produtos e adiciona um novo campo
        ...product,
        priceFormated: formatPrice(product.price),
      }));
      setProducts(data);

      const prices = [];
      data.map(product => prices.push(Math.round(product.price / 5.2)));
      setDolarPrices(prices);
    }
    loadProducts();
  }, []);
  // O array vazio é necessário para que useEfect execute apenas uma vez

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <Product
          image={product.image}
          title={product.title}
          priceFormated={product.priceFormated}
          dolarPrice={dolarPrices[product.id]}
          key={product.id}
          product={product}
          handleAddProduct={handleAddProduct}
          amount={amount}
        />
      ))}
    </ProductList>
  );
}

// Serve para mapear as actions de forma que elas possam
// ser acessadas como propriedades do componente

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../redux/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
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
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

// Serve para mapear as actions de forma que elas possam
// ser acessadas como propriedades do componente

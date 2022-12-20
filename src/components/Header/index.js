import React from 'react';
import { FaShoePrints } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Container, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <div>
      <Link to="/">
        <h1 className="logo">
          RocketShoes
          <FaShoePrints color="#fff" size={30} />
        </h1>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </div>
  );
}

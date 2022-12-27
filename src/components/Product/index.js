/* eslint-disable react/prop-types */
import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Product({
  id,
  image,
  title,
  priceFormated,
  handleAddProduct,
  amount,
  dolarPrice,
}) {
  return (
    <li key={id}>
      <img src={image} alt={title} />
      <strong>{title}</strong>
      <span>{priceFormated}</span>
      <span>{`USD ${dolarPrice}`}</span>
      <button type="button" onClick={() => handleAddProduct(id)}>
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> {amount[id] || 0}
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  );
}

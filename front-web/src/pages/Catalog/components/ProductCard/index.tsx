import React from "react";
import ProducPrice from "core/components/ProductPrice";
import { Product } from "core/types/Products";
import "./styles.scss";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => (
  <div className='card-base border-radius-10 product-card'>
    <img
      src={product.imgUrl}
      alt={product.name}
      className='product-card-image'
    />
    <div className='product-info'>
      <h6 className='product-name'>{product.name}</h6>
      <ProducPrice price={product.price} />
    </div>
  </div>
);

export default ProductCard;

import './ProductCard.css';
import { ReactNode } from 'react';
import ProductCardContext from './ProductCardContext';
import { Product } from '../types';
import ProductImage from './ProductImage';
import ProductButton from './ProductButton';
import ProductInfo from './ProductInfo';
import ProductCategory from './ProductCategory';
import ProductPrice from './ProductPrice';
import ProductTitle from './ProductTitle';
import ProductRating from './ProductRating';

type Props = {
  product: Product;
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

function ProductCard({ image, info, action, product }: Props) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="product-card">
        {image}
        <div className="product-card-bottom">
          {info}
          {action}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Button = ProductButton;
ProductCard.Title = ProductTitle;
ProductCard.Info = ProductInfo;
ProductCard.Category = ProductCategory;
ProductCard.Rating = ProductRating;
ProductCard.Price = ProductPrice;

export default ProductCard;

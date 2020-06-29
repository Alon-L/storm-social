import React from 'react';
import { Link } from 'react-router-dom';
import ProductBoxContainer from './ProductBoxContainer';
import ProductBoxContent, { ProductBoxContentProps } from './ProductBoxContent';

export type ProductBoxProps = ProductBoxContentProps & {
  route: string;
};

const ProductBox: React.FC<ProductBoxProps> = (props: ProductBoxProps) => {
  const { route = '#' } = props;

  return (
    <ProductBoxContainer>
      <Link className="flex" to={route}>
        <ProductBoxContent
          className="transition-transform duration-200 ease-in-out transform hover:-translate-y-4"
          {...props}
        />
      </Link>
    </ProductBoxContainer>
  );
};

export default ProductBox;

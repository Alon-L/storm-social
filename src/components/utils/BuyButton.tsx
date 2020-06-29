import querystring from 'querystring';
import React, { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ProductStruct } from '../../products';

type BuyButtonProps = Partial<LinkProps> & ProductStruct;

const BuyButton: React.FC<BuyButtonProps> = (
  props: PropsWithChildren<BuyButtonProps>,
) => {
  const { title, image, price, query, quantity, children } = props;

  const params = querystring.stringify({
    title,
    image,
    price,
    query,
    quantity,
  });
  const url = `/checkout?${params}`;

  return (
    <div className="mt-8 p-2">
      <Link {...props} to={url} type="button">
        {children && 'Buy Now!'}
      </Link>
    </div>
  );
};

export default BuyButton;

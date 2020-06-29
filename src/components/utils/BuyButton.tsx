import querystring from 'querystring';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ProductStruct } from '../products';

type BuyButtonProps = Partial<LinkProps> & ProductStruct;

const BuyButton: React.FC<BuyButtonProps> = (props: BuyButtonProps) => {
  const { title, image, price, query, quantity } = props;

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
        Buy Now!
      </Link>
    </div>
  );
};

export default BuyButton;

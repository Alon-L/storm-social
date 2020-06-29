import React from 'react';

export interface CheckoutSummaryProps {
  title: string;
  image: string;
  price: number;
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = (
  props: CheckoutSummaryProps,
) => {
  const { title, image, price } = props;

  return (
    <div>
      <p>{title}</p>
      <p>{image}</p>
      <p>{price}</p>
    </div>
  );
};

export default CheckoutSummary;

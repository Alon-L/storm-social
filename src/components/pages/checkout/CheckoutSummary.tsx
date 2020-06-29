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
    <div className="">
      <h5 className="text-xl font-medium">- {title}</h5>
      <p className="mb-4">{price.toLocaleString()} USD</p>
      <img width={150} src={image} alt={title} />
    </div>
  );
};

export default CheckoutSummary;

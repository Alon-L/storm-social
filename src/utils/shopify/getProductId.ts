import Shopify from './Shopify';

export default async (query: string): Promise<null | number | string> => {
  const client = Shopify.getInstance();

  const products = await client.product.fetchQuery({
    first: 1,
    query,
    sortKey: 'PRICE',
  });

  if (!products || !products.length) return null;

  return products[0].variants[0].id;
};

import Shopify from './Shopify';

export default async (
  id: number | string,
  quantity: number,
  email: string,
  customAttributes: Record<string, string>,
): Promise<string> => {
  const client = Shopify.getInstance();

  console.log(id);

  const checkout = await client.checkout.create({
    email,
    lineItems: [
      {
        variantId: id,
        quantity,
      },
    ],
    customAttributes: Object.entries(customAttributes).map(([key, value]) => ({
      key,
      value,
    })),
  });

  console.log(checkout);
  return checkout.webUrl;
};

import fetch from 'node-fetch';
import ShopifyBuy, { Client, Config } from 'shopify-buy';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).fetch = fetch;

const config: Config = {
  domain: 'stormsocial.myshopify.com',
  storefrontAccessToken: '0c6c6f5fc7dd11781f4d16d99f03ff5e',
};

export default class Shopify {
  public static client: Client;

  public static getInstance(): Client {
    if (!Shopify.client) {
      Shopify.client = ShopifyBuy.buildClient(config);
    }

    return Shopify.client;
  }
}

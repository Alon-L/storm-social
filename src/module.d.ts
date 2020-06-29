declare module 'shopify-buy' {
  declare function buildClient(config: Config, fetch: unknown): Client;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type GraphModel = Record<string, any>;

  export interface Client {
    product: ProductResource;
    checkout: CheckoutResource;
  }

  export interface ProductResourceFetchQueryArgs {
    first?: number;
    sortKey?: string;
    query?: string;
    reverse?: boolean;
  }

  export interface ProductResource {
    fetchQuery(
      args: Partial<ProductResourceFetchQueryArgs>,
    ): Promise<GraphModel[]>;
  }

  export interface CheckoutResourceCreateInput {
    email?: string;
    lineItems?: {
      variantId: string | number;
      quantity: number;
    }[];
    shippingAddress?: string;
    note?: string;
    customAttributes?: {
      key: string;
      value: string;
    }[];
    presentmentCurrencyCode?: string;
  }

  export interface CheckoutResource {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create(input: Partial<CheckoutResourceCreateInput>): Promise<GraphModel>;
  }

  export interface Config {
    domain: string;
    storefrontAccessToken: string;
  }
}

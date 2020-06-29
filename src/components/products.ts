import { ProductProps } from './pages/product/ProductPage';
import featuredArticles from '../assets/products/featuredArticles.jpg';
import forbes from '../assets/products/forbes.png';
import tiktok from '../assets/products/tiktok.jpeg';
import verification from '../assets/products/verification.png';
import followers from '../assets/socials/followers.png';
import followers10k from '../assets/socials/followers_10k.png';
import followers25k from '../assets/socials/followers_25k.png';
import followers5k from '../assets/socials/followers_5k.png';
import tiktokImage from '../assets/socials/tiktok.png';
import verificationImage from '../assets/socials/verification.png';

export enum ProductQuery {
  Followers = '1000 Instagram Followers',
  Articles = 'Article bundle',
  Forbes = 'Forbes Article',
  Verification = 'Instagram Verification',
  TikTok = 'TikTok algorithm',
}

export enum ProductNames {
  Verification = 'verification',
  TikTok = 'tiktok',
  Forbes = 'forbes',
  Articles = 'articles',
  Followers5K = 'followers5k',
  Followers10K = 'followers10k',
  Followers25K = 'followers25k',
  FollowersSlider = 'followers',
}

export const ProductImages = {
  [ProductNames.Verification]: verificationImage,
  [ProductNames.TikTok]: tiktokImage,
  [ProductNames.Forbes]: forbes,
  [ProductNames.Articles]: featuredArticles,
  [ProductNames.Followers5K]: followers5k,
  [ProductNames.Followers10K]: followers10k,
  [ProductNames.Followers25K]: followers25k,
  [ProductNames.FollowersSlider]: followers,
};

export interface ProductStruct {
  title: string;
  image: keyof typeof ProductImages;
  price: number;
  query: ProductQuery;
  quantity?: number;
}

export interface ProductRoute extends ProductProps {
  path: string;
}

export const products: ProductRoute[] = [
  {
    path: '/products/verification',
    title: 'Verification',
    desc:
      'Instagram Verification is the best way to establish your Brand or Influencer profile. Instagram prioritise verified accounts pushing you or your brand to the top of the search & comment sections, driving more traffic to your desired account!',
    readyToOrder:
      'By purchasing this service Storm Social Will provide you with an Instagram Verification Tick to your desired account. Please note when purchasing this service you must require a min. Of 5 featured articles. Don’t have any articles? <a class="underline" href="#">Click here</a>',
    price: 5999.99,
    image: ProductNames.Verification,
    pageImage: verification,
    query: ProductQuery.Verification,
  },
  {
    path: '/products/tiktok',
    title: 'TikTok',
    desc:
      'Why you need this? Having access to to the TikTok Algorithm is the best way to increase your chances to be featured on the #foryoupage helping our clients to go viral!',
    readyToOrder: `
By Purchasing the service Storm Social will provide you with the latest TikTok Algorithm.<br /><br />
Please not the TikTok Algorithm changes frequently. To take full advantage of this service we advise our clients to create as much content as possible before TikTok Update to new algorithm.
      `,
    price: 1499.99,
    image: ProductNames.TikTok,
    pageImage: tiktok,
    query: ProductQuery.TikTok,
  },
];

export const articles: ProductProps[] = [
  {
    title: 'Forbes',
    desc:
      'The Forbes article is the most prestigious article out there boosting your social media presence.',
    readyToOrder:
      'By purchasing this package Storm Social will secure you a Forbes article.',
    price: 4999.99,
    image: ProductNames.Forbes,
    pageImage: forbes,
    query: ProductQuery.Forbes,
  },
  {
    title: 'Featured Articles',
    desc:
      'This boosts your online recognition & social media presence. Articles are also required in order to receive <a class="underline" href="/products/verification">Instagram Verification</a>',
    readyToOrder:
      'By purchasing this service storm social will provide you with a mainstream featured article of your choice.',
    price: 1999.99,
    image: ProductNames.Articles,
    pageImage: featuredArticles,
    query: ProductQuery.Articles,
  },
];

export default [...products, ...articles] as ProductProps[];

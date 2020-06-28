import React, { PropsWithChildren } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';
import giveawayImage from './assets/giveaway/giveaway_image.png';
import tiktok from './assets/products/tiktok.jpeg';
import verification from './assets/products/verification.png';
import Footer from './components/navs/footer/Footer';
import Navbar from './components/navs/navbar/Navbar';
import Page404 from './components/pages/404/Page404';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Faq from './components/pages/faq/FAQ';
import Giveaway, { Giveaways } from './components/pages/giveaway/Giveaway';
import GrowthResults from './components/pages/growth/GrowthResults';
import Home from './components/pages/home/Home';
import Memberships from './components/pages/memberships/Memberships';
import Product, { ProductProps } from './components/pages/product/Product';
import ProductArticles from './components/pages/product/ProductArticles';
import ProductFollowers from './components/pages/product/followers/ProductFollowers';
import Tos from './components/pages/tos';
import WipNotification from './components/utils/WIPNotification';

const products: (ProductProps & { path: string })[] = [
  {
    path: '/products/verification',
    title: 'Verification',
    desc:
      'Instagram Verification is the best way to establish your Brand or Influencer profile. Instagram prioritise verified accounts pushing you or your brand to the top of the search & comment sections, driving more traffic to your desired account!',
    readyToOrder:
      'By purchasing this service Storm Social Will provide you with an Instagram Verification Tick to your desired account. Please note when purchasing this service you must require a min. Of 5 featured articles. Don’t have any articles? <a class="underline" href="#">Click here</a>',
    price: 5999.99,
    src: verification,
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
    src: tiktok,
  },
];

const giveaways: Giveaways = {
  current: {
    desc: `
Bryce Hall Giveaway

Followers - 4M

Estimated Growth - 20K+
Guaranteed Growth - 10K

Audience
USA, UK, AUS

Giveaway Date
07.01.20 - 07.01.20

Prize! $5000 CASH`,
    src: giveawayImage,
    endsAt: new Date('July 27, 2020 00:20:00 GMT+00:00'),
  },
  previous: {
    desc: `
Previous giveaway!`,
    src: giveawayImage,
    endsAt: new Date(Date.now() + 10000),
  },
};

/**
 * Route that includes the WIP notification along with a navbar and a footer
 * @param {React.PropsWithChildren<RouteProps>} props
 * @returns {JSX.Element}
 */
const WIPFullRoute: React.FC<RouteProps> = (
  props: PropsWithChildren<RouteProps>,
) => {
  const { children } = props;

  return (
    <Route {...props}>
      <WipNotification />
      <Navbar />
      {children}
      <Footer />
    </Route>
  );
};

/**
 * Route that includes a navbar and a footer
 * @param {React.PropsWithChildren<RouteProps>} props
 * @returns {JSX.Element}
 */
const FullRoute: React.FC<RouteProps> = (
  props: PropsWithChildren<RouteProps>,
) => {
  const { children } = props;

  return (
    <Route {...props}>
      <Navbar />
      {children}
      <Footer />
    </Route>
  );
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <FullRoute exact path="/">
        <Home />
      </FullRoute>
      <FullRoute path="/about">
        <About />
      </FullRoute>
      <Route path="/contact">
        <Contact />
      </Route>

      <FullRoute path="/faq">
        <Faq />
      </FullRoute>

      <FullRoute path="/giveaways/current">
        <Giveaway {...giveaways.current} />
      </FullRoute>
      <FullRoute path="/giveaways/previous">
        <Giveaway {...giveaways.previous} />
      </FullRoute>

      <FullRoute path="/growth/results">
        <GrowthResults />
      </FullRoute>

      <WIPFullRoute path="/memberships">
        <Memberships />
      </WIPFullRoute>

      {products.map(product => (
        <FullRoute key={product.path} path={product.path}>
          <Product {...product} />
        </FullRoute>
      ))}

      <FullRoute path="/products/articles">
        <ProductArticles />
      </FullRoute>
      <FullRoute path="/products/instagram">
        <ProductFollowers />
      </FullRoute>

      <FullRoute path="/tos">
        <Tos />
      </FullRoute>

      <FullRoute path="*">
        <Page404 />
      </FullRoute>
    </Switch>
  );
};

export default Routes;

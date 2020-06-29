import React, { PropsWithChildren } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';
import giveawayImage from './assets/giveaway/giveaway_image.png';
import Footer from './components/navs/footer/Footer';
import Navbar from './components/navs/navbar/Navbar';
import Page404 from './components/pages/404/Page404';
import About from './components/pages/about/About';
import Checkout from './components/pages/checkout/Checkout';
import Contact from './components/pages/contact/Contact';
import Faq from './components/pages/faq/FAQ';
import Giveaway, { Giveaways } from './components/pages/giveaway/Giveaway';
import GrowthResults from './components/pages/growth/GrowthResults';
import Home from './components/pages/home/Home';
import Memberships from './components/pages/memberships/Memberships';
import ProductArticles from './components/pages/product/ProductArticles';
import ProductPage from './components/pages/product/ProductPage';
import ProductFollowers from './components/pages/product/followers/ProductFollowers';
import Tos from './components/pages/tos';
import { products } from './components/products';
import WipNotification from './components/utils/WIPNotification';

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
          <ProductPage {...product} />
        </FullRoute>
      ))}

      <FullRoute path="/products/articles">
        <ProductArticles />
      </FullRoute>
      <FullRoute path="/products/instagram">
        <ProductFollowers />
      </FullRoute>

      <FullRoute path="/checkout">
        <Checkout />
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

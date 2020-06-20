import React, { PropsWithChildren } from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';
import currentGiveaway from './assets/giveaway/current.png';
import previousGiveaway from './assets/giveaway/previous.png';
import verification from './assets/products/verification.png';
import Footer from './components/navs/footer/Footer';
import Navbar from './components/navs/navbar/Navbar';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Giveaway from './components/pages/giveaways/Giveaway';
import Home from './components/pages/home/Home';
import OrganicGrowth from './components/pages/organic/growth/OrganicGrowth';
import Product, { ProductProps } from './components/pages/product/Product';

const products: (ProductProps & { path: string })[] = [
  {
    path: '/products/verification',
    title: 'Verification',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum dolorem eum facilis hic impedit ipsa iure labore, laboriosam, laudantium pariatur, perspiciatis placeat provident quia rem repudiandae vel?',
    readyToOrder:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis cum dolorem eum facilis hic impedit ipsa iure labore, laboriosam, laudantium pariatur, perspiciatis placeat provident quia rem repudiandae vel?',
    src: verification,
  },
];

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

      <FullRoute path="/giveaways/current">
        <Giveaway src={currentGiveaway} />
      </FullRoute>
      <FullRoute path="/giveaways/previous">
        <Giveaway src={previousGiveaway} />
      </FullRoute>

      <FullRoute path="/growth/organic">
        <OrganicGrowth />
      </FullRoute>

      {products.map(product => (
        <FullRoute key={product.path} path={product.path}>
          <Product {...product} />
        </FullRoute>
      ))}
    </Switch>
  );
};

export default Routes;

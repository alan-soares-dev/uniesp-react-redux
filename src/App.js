import React from 'react';
import Cart from './components/Cart';
import CartAdd from './components/CartAdd';

const App = () => {
  return (
    <div>
      <h1>Meu E-commerce</h1>
      <Cart />
      <CartAdd />
    </div>
  );
};

export default App;
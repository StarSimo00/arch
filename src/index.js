import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter , Route, Routes ,  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';  
import Contact from './components/Contact';
import Products from './components/Products';
import VideoBg from './components/VideoBg';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store} >
    <VideoBg/>
    
    <BrowserRouter>
        <Routes>

          <Route path="/arch" index element={<App />} />
          <Route path='/Contacts' element={ <Contact/> } />
          <Route path='/Products' element={ <Products/> } />
          <Route path='/Product/:id' element={ <ProductDetails/> } />
          <Route path='/Cart' element={ <Cart/> } />
        </Routes>

    </BrowserRouter>
    
  </Provider>
  </>

);
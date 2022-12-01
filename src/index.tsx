import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';
import Home from './views/Home';
import Categories from './views/Categories';
import Pets from './components/categories/Pets';
import Humans from './components/categories/Humans';
import Amphibians from './components/categories/Amphibians';
import Element from './components/common/Element';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path: "/categories/pets",
    element: <Pets />
  },
  {
    path: "/categories/humans",
    element: <Humans />
  },
  {
    path: "/categories/amphibians",
    element: <Amphibians />
  },
  {
    path: "/categories/:type/:id",
    element: <Element />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);



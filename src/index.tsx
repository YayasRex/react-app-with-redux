import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home';
import Categories from './views/Categories';
import Pets from './components/Pets';
import Humans from './components/Humans';
import Amphibians from './components/Amphibians';
import Element from './components/Element';

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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

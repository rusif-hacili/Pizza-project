import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

      {
        element: <Home />,
        index: true
      },
      
      {
        path: '/menu',
        element: <Menu />,

      },

      {
        path: '/about',
        element: <About />
      },

      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App>

      </App>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

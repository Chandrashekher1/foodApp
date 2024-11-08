import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu'; // Corrected typo
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
// import Contact from './components/Contact';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import LoginForm from './components/LoginForm';

// Lazy loading Contact component
const Contact = lazy(() => import('./components/Contact'));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet /> {/* Outlet to render child components */}
      </div>
    </Provider>
  );
};

// Define the routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // Error component to handle invalid routes
    children: [
      {
        path: "/",
        element: <Body />, // Body or home component
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu /> // Corrected restaurant menu path
      },
      {
        path: "/cart",
        element: <Cart /> // Cart page
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}> 
            <Contact /> 
          </Suspense>
        ), // Lazy loading Contact
      },
      {
        path: "/about",
        element: <About /> // About page
      },
    ]
  }
]);

export default appRouter;

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

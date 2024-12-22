import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import About from './components/About';
import LoginForm from './components/LoginForm';
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appStore';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Contact = lazy(() => import('./components/Contact'));

const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
  }, [dispatch, navigate]);

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={appStore}>
        <AppLayout />
      </Provider>
    ),
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <LoginForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { store } from './store/Store.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error404 from './pages/Error404.jsx'
import TestPage from './pages/TestPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>,
)

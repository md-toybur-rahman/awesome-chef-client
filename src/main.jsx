import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider, { AuthProviderContext } from './Provider/Provider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)

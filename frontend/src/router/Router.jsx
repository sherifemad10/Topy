import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './AppLayout'
import Dashboard from '../Pages/Dashboard'
import AllProdects from '../Pages/AllProducts'
import NotFound from '../Pages/NotFound'
import AddProduct from '../Pages/AddProduct'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <AllProdects />,
      },
      {
        path: 'addproduct',
        element: <AddProduct />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router

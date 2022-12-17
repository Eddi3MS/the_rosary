import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './pages/Home'
import Oracoes from './pages/Oracoes'
import Terco from './pages/Terco'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/oracoes',
        element: <Oracoes />,
      },
      {
        path: '/terco',
        element: <Terco />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

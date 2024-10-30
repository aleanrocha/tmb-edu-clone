import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../screens/Home'
import { Login } from '../screens/Home'
import { ForgotPassword } from '../screens/Home'
import { Producer } from '../screens/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'recuperarSenha',
        element: <ForgotPassword />,
      },
      {
        path: 'produtor',
        element: <Producer />,
      },
    ],
  },
])

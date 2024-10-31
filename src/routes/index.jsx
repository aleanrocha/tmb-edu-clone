import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../screens/Home'
import { Login } from '../screens/Login'
import { ForgotPassword } from '../screens/ForgotPassword'
import { Producer } from '../screens/Producer'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/recuperarSenha',
    element: <ForgotPassword />
  },
  {
    path: '/produtor',
    element: <Producer />
  }
])

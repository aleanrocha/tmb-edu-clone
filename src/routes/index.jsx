import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../screens/Home'
import { Login } from '../screens/Login'
import { ForgotPassword } from '../screens/ForgotPassword'

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
  }
])

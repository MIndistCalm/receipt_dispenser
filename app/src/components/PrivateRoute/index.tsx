import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const uid = localStorage.getItem('access')

  return uid ? <Outlet /> : <Navigate to="/" />
}

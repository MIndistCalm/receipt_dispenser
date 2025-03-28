import { Navigate, Outlet } from 'react-router-dom'
const containerBaseStyle =
  'mx-auto flex h-screen flex-col gap-3 rounded-2xl bg-gray-50'
const containerResponsiveStyle =
  'md:h-[calc(100vh-0.5rem*8)] md:max-w-[500px] md:shadow-2xl'

export const PrivateRoute = () => {
  const uid = localStorage.getItem('access')

  return uid ? (
    <div className={`${containerBaseStyle} ${containerResponsiveStyle}`}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  )
}

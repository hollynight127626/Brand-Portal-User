import { Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import { useAuthContext } from '@/context/useAuthContext'
import { authRoutes } from '@/routes/index'
import DynamicAppRoutes from '@/routes/index'
import AdminLayout from '@/layouts/AdminLayout'

const AppRouter = (props) => {
  const { isAuthenticated } = useAuthContext()
  const appRoutes = DynamicAppRoutes()
  return (
    <Routes>
      {(authRoutes || []).map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={
            isAuthenticated ? (
              <Navigate to="/" /> // Redirect to the home page or any other page for authenticated users
            ) : (
              <AuthLayout {...props}>{route.element}</AuthLayout>
            )
          }
        />
      ))}

      {(appRoutes || []).map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={
            route.status === 'disable' && !isAuthenticated ? (
              <Navigate to="/sign-in" /> // Redirect to login if route status is 'disable' and user is not authenticated
            ) : (
              <AdminLayout {...props}>{route.element}</AdminLayout>
            )
          }
        />
      ))}
    </Routes>
  )
}

export default AppRouter

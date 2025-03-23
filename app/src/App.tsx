import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components'
import { SignIn } from './pages'
import { PrivateRoute } from './components/PrivateRoute'

export const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" index element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<>home</>} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

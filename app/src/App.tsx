import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from './components'
import { Receipts, SignIn } from './pages'
import { PrivateRoute } from './components/PrivateRoute'
import { RoutesEnum } from './constants/routes'

export const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path={RoutesEnum.DEFAULT} index element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path={RoutesEnum.RECEIPTS} element={<Receipts />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

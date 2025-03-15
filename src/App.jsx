import { BrowserRouter, Route, Routes } from 'react-router'
import { IndexPage } from './pages/IndexPage.jsx'
import { FavoritesPage } from './pages/FavoritesPage'
import Layout from './layout/Layout'
import Notifications from './Components/Notifications'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Notifications />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<IndexPage />} />
            <Route path='/favoritos' element={<FavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

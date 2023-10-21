import { Routes, Route } from 'react-router-dom'
import Home from './HomeComponents/Home'
import { QueryClientProvider, QueryClient } from 'react-query'
import Shop from './ShopComponents/Shop'
import About from './AboutComponents/About'
import Contact from './ContactComponents/Contact'
import Products from './ProductComponents/Products'
import Login from './AuthComponents/Login'
import Signup from './AuthComponents/Signup'
import { useGeneralAppContext } from '../functions/useGeneralAppContext'

const queryClient = new QueryClient()

function App() {

  const { showSignup, showLogin } = useGeneralAppContext()

  return (
    <div className={`font-Urbanist relative ${showSignup || showLogin ? 'max-h-screen overflow-y-hidden' : ''}`}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/:id' element={<Products />} />
        </Routes>
        <div className={`${showSignup || showLogin ? 'h-screen absolute top-0 flex items-center justify-center w-full' : ''}`}>
          <Login />
          <Signup />
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default App

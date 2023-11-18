import { Routes, Route } from 'react-router-dom'
import Home from './HomeComponents/Home'
import { QueryClientProvider } from 'react-query'
import Shop from './ShopComponents/Shop'
import About from './AboutComponents/About'
import Contact from './ContactComponents/Contact'
import Products from './ProductComponents/Products'
import Login from './AuthComponents/Login'
import Signup from './AuthComponents/Signup'
import { useGeneralAppContext } from '../functions/useGeneralAppContext'
import Account from './AuthComponents/Account'
import queryClient from './queryClient'


function App() {

  const { showSignup, showLogin, showAccount } = useGeneralAppContext()

  return (
    <div className={`font-Urbanist relative ${showSignup || showLogin || showAccount ? 'max-h-screen overflow-y-hidden' : ''}`}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/:id' element={<Products />} />
        </Routes>
        <div className={`${showSignup || showLogin || showAccount ? 'h-screen absolute top-0 flex items-center justify-center w-full' : ''}`}>
          <Login />
          <Signup />
          <Account />
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default App

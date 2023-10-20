import { Routes, Route } from 'react-router-dom'
import Home from './HomeComponents/Home'
import { GeneralAppProvider } from '../contexts/GeneralAppContext'
import { QueryClientProvider, QueryClient } from 'react-query'
import Shop from './ShopComponents/Shop'
import About from './AboutComponents/About'
import Contact from './ContactComponents/Contact'
import Products from './ProductComponents/Products'
import Login from './AuthComponents/Login'
import Signup from './AuthComponents/Signup'

const queryClient = new QueryClient()

function App() {

  return (
    <div className='font-Urbanist relative'>
      <QueryClientProvider client={queryClient}>
        <GeneralAppProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products/:id' element={<Products />} />
          </Routes>
          <div className="h-screen absolute top-0 flex items-center justify-center w-full">
            <Login />
            <Signup />
          </div>
        </GeneralAppProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App

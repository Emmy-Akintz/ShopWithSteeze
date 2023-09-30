import { Routes, Route } from 'react-router-dom'
import Home from './HomeComponents/Home'
import { GeneralAppProvider } from '../contexts/generalAppContext'
import { QueryClientProvider, QueryClient } from 'react-query'
import Shop from './ShopComponents/Shop'
import About from './AboutComponents/About'
import Contact from './ContactComponents/Contact'

const queryClient = new QueryClient()

function App() {

  return (
    <div className='font-Urbanist'>
      <QueryClientProvider client={queryClient}>
        <GeneralAppProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </GeneralAppProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App

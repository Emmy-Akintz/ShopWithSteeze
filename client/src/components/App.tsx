import { Routes, Route } from 'react-router-dom'
import Home from './HomeComponents/Home'
import { GeneralAppProvider } from '../contexts/generalAppContext'
import { QueryClientProvider, QueryClient } from 'react-query'
import Shop from './ShopComponents/Shop'

const queryClient = new QueryClient()

function App() {

  return (
    <div className='font-Urbanist'>
      <QueryClientProvider client={queryClient}>
        <GeneralAppProvider>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
          </Routes>
        </GeneralAppProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App

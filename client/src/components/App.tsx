import { Routes, Route } from 'react-router-dom'
import Home from './HomeComponents/Home'
import { GeneralAppProvider } from '../contexts/generalAppContext'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <div className='font-Urbanist'>
      <QueryClientProvider client={queryClient}>
        <GeneralAppProvider>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </GeneralAppProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App

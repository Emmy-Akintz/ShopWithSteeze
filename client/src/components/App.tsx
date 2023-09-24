import { Routes, Route } from 'react-router-dom'
import Home from './HomeComponents/Home'
import { GeneralAppProvider } from '../contexts/generalAppContext'

function App() {

  return (
    <div className='font-Urbanist'>
      <GeneralAppProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </GeneralAppProvider>
    </div>
  )
}

export default App

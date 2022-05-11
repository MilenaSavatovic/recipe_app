import { BrowserRouter } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Pages from './pages/Pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Pages />
    </BrowserRouter>
  )
}

export default App

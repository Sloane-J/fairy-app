import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
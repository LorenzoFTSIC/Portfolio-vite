
import { Helmet } from "react-helmet-async";
import './App.css'
import Header from './components/header/Header'
import Home from './components/pages/Home'

function App() {

  return (
    <>
      <Helmet>
        <title>LFerri Portfolio</title>
        <meta name="description" content="Lorenzo Ferri's developer portfolio" />
      </Helmet>

      <Header />

      <Home />
    </>
  )
}

export default App

import { useState } from 'react'
import Header from './components/header'
import MainS from './components/main'
import Footer from './components/footer'
import Polityka from './components/polityka'
import Headerpolityka from './components/header  polityka'
import './App.css'

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Header />}
      {page === "polityka" && <Headerpolityka setPage={setPage} />}

      {page === "home" && <MainS />}
      {page === "polityka" && <Polityka />}

      <Footer setPage={setPage} />
    </>
  )
}

export default App
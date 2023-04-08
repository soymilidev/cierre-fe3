import React from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Favs from './Pages/Favs'
import Detail from './Pages/Detail'
import PageNotFound from './Pages/PageNotFound'
import './App.css'
import { useContextGlobal } from "./components/utils/global.context";


function App() {
  const { themeState } = useContextGlobal()

  return (
    <div className={themeState.theme ? 'index' : 'index'} style={{ backgroundColor: themeState.background, color: themeState.color }}>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
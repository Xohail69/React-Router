import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

export default function Layout() {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer/>
    </>
  )
}

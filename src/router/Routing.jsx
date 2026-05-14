import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import RootLayout from './RootLayout'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import ProductsPage from '../pages/Products'
import AboutPage from '../pages/About'
import ContactPage from '../pages/Contact'
import NotFoundPage from '../pages/NotFound'
import AuthPage from '../pages/AuthPage'


function Routing() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFoundPage/>}/>
            <Route path="/" element={<RootLayout/>}>
              <Route index element={<Home/>}/>
              <Route path="/products" element={<ProductsPage/>}/>
              <Route path="/products/:id" element={<ProductDetail/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/auth" element={<AuthPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
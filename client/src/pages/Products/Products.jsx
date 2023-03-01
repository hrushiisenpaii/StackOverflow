import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Products.css"
import ProductsList from './ProductsList'

const Products = () => {
  return (
    <>
    <Navbar/>
    
    <div className="home-container-1">  
        <LeftSidebar/>
        <div className="home-container-2">
          <div className="products-container-1">  
            <h1>Products in Arsenal</h1>
            <ProductsList/>
          </div>
        </div>
    </div>

    <Footer/>
   </>
  )
}

export default Products
import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = () => {
  return (
    <div className='product-list-container'>
        <Link to='/' className='item-1'>
            <div className="product-container">
            <h3>Stack Overflow</h3>
            <p>Public Questions and Answers, surf the feed and answers some question</p>
            </div>
        </Link>
        <Link to='/Teams' className='item-1'>
            <div className="product-container">
            <h3>For Teams</h3>
            <p>Collaborate, connect, and grow your team’s wisdom and build more</p>
            </div>
        </Link>
        <Link to='/AskQuestion' className='item-1'>
            <div className="product-container">
            <h3>Ask</h3>
            <p>Having a doubt, ask the community and be ready for cool hacks</p>
            </div> 
        </Link>
        <Link to='/User' className='item-1'>
            <div className="product-container">
            <h3>Users</h3>
            <p>Meet our Userbase, webs most fascinating and brilliant minds</p>
            </div> 
        </Link>   
    </div>
  )
}

export default ProductsList
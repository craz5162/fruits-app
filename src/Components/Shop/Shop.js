import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
      const [products, setProducts] = useState([]);
      const [cart, setcart] = useState([]);
      useEffect(()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
      },[])


      const addtocart = (product) => {
            console.log(product);
            const newCart = [...cart, product]
            setcart(newCart);
      }


      return (
            <div className='shop'>
                  <div className="left">
                  {
                        products.map(product => <Product
                        product = {product}
                        addtocart = {addtocart}
                        ></Product>)
                  }
                  </div>
                  <div className="right">
                        <Cart cart = {cart}></Cart>
                  </div>
            </div>
      );
};

export default Shop;
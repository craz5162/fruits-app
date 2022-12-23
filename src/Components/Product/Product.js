import React from 'react';
import './Product.css'

const Product = ({addtocart, product}) => {
      const {name, img, price, tex,} = product
      return ( 
            <div className='product'>
                  <img src={img} alt="" />
                  <h3>NAme : {name}</h3>
                  <div className="para">
                        <p>Price : ${price}</p>
                        <p>Tex : ${tex}</p>
                  </div>
                  <button onClick={()=>addtocart(product)} className='button'>Buy-Now</button>
            </div>
      );
};

export default Product;
import React from 'react';

const Cart = ({cart}) => {
      let price = 0;
      let tex = 0;
      let total = 0;
      for(const product of cart){
            price = price + parseInt(product.price);
            tex = (tex + parseFloat(product.tex)) ;
            total = (price + tex).toFixed(2)
      }
      return (
            <div>
                  <h4>The price of those who will take the fruit is going up here</h4>
                        <div className="para-2">
                              <p>Item : {cart.length}</p>
                              <p>Price : ${price.toFixed(2)} </p>
                              <p>Tex : ${tex.toFixed(2)}</p>
                        </div>
                        <div className="total">
                              <h3>Total : ${total}</h3>
                        </div>
            </div>
      );
};

export default Cart;
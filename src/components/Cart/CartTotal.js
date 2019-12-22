import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './../PayPalButton';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './../../constants/stripe';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartTotal({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart, paidSuccessfully } = value;

  const onToken = (token, addresses) => {
    console.log({addresses, token})
    toast.success("Paid Successfully!", {
        position: toast.POSITION.TOP_RIGHT
      });
      setTimeout(() => {
        paidSuccessfully() 
      }, 3000);
  }

  
    return (
        <React.Fragment> 
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                    text-capitalize text-right">
                        <Link to="/cart">
                            <button className="btn btn-outline-danger text-uppercase
                            mb-3 px-5" type="button" 
                            onClick={() => clearCart()}>
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                Subtotal:</span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Tax:</span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                Total:</span>
                            <strong>$ {cartTotal}</strong>
                        </h5>

                        {/* Stripe button */}
                        <StripeCheckout
                          token = {onToken}
                          stripeKey={STRIPE_PUBLISHABLE}
                          billingAddress={false}
                          shippingAddress={false}
                          amount={cartTotal * 100}
                         />
                         <ToastContainer autoClose={2000}/>
                        {/* Paypal button commented as its API doesn't work*/}
                        {/* <PayPalButton total={cartTotal} clearCart={clearCart} 
                        history={history} /> */}                    
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}
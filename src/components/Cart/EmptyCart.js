import React from 'react';
import emptyCart from '../../img/empty-cart.png'
import {CartWrapper} from '../CartWrapper'

export default function EmptyCart() {
        return (
            
            <div class="jumbotron jumbotron-fluid">
                <div class="container mt-5">
                <img src={emptyCart} />
                </div>
            </div>
                
        );
    }

    {/* <div className="emptycart-bg">
            <div className="container mt-5" >
                <div className="row" >
                    <div className="col-10 text-center mx-auto text-title" >
                        <img src={emptyCart} />
                    </div> 
                </div>
            </div>
            </div> */} 
import React from 'react';
import {CartWrapper} from '../CartWrapper'

export default function EmptyCart() {
        return (
            <CartWrapper>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>Your Cart Is Empty</h1>
                    </div>
                </div>
            </div>
            </CartWrapper>
            
        );
    }
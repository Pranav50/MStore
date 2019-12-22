import React, { Component } from 'react';
import styled from "styled-components";
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {ButtonContainer2} from './Button2';
import { Link } from 'react-router-dom';
import {Product} from './Product'

export default class Modal extends Component {
    render() {
        const cartBtn = {
            marginLeft: '15px'
        }
        const closeBtn = {
            color: '#e84118',
            outline: 'none !important'
        }
        
        return (
                <ProductConsumer>
                    {(value) => {
                        const {modalOpen, closeModal} = value;
                        const {img, title, price} = value.modalProduct;
                        const {inCart} = value.detailProduct;

                        if(!modalOpen) {
                            return null; 
                        }
                        else {
                            return (
                            <ModalContainer>
                                    <div className="container">
                                            <div className="row">
                                                <div id="modal" className="col-8 mx-auto 
                                                col-md-4 col-lg-4 text-center p-5">
                                                    
                                                    <button 
                                                    onClick={() =>{
                                                    closeModal()}} 
                                                    className="close" 
                                                    type="button"
                                                    style={closeBtn}>&times;</button>
                                                    <h5>
                                                    {inCart ? "In Cart" : ""}
                                                    </h5>
                                                    <img src={img} className="img-fluid img-responsive"
                                                    alt="product"/>
                                                    <hr />
                                                    <h5>{title}</h5>
                                                    <h5 className="text-muted">Price: <b>$ {price}</b></h5>
                                                    <Link to="/">
                                                        <ButtonContainer
                                                            onClick={() => {
                                                                closeModal()
                                                            }}
                                                        >    
                                                             Close
                                                        </ButtonContainer>
                                                    </Link>

                                                    <Link to="/cart">
                                                        <ButtonContainer2 cart
                                                        style={cartBtn}
                                                            onClick={() => 
                                                                closeModal()}>    
                                                             Go To Cart
                                                        </ButtonContainer2>
                                                    </Link>
                                                
                                                </div>
                                            </div>
                                    </div>
                            </ModalContainer>
                            );
                            
                        }
                    }}
                </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal {
    background:#dcdde1;
    border-radius:10px;
    top:0;
}
`
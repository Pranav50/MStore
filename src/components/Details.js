import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {DetailsWrapper} from './DetailsWrapper';

export default class Details extends Component {
    render() {
        const addToCart = {
            marginLeft: '5px'
        }

        return (
            <ProductConsumer>
                {(value) => {
     const {id, company, img, info, price, title} = value.detailProduct;
                    return (
                        <DetailsWrapper>
                                            <div className="container py-5">
                            
                            <div className="row">
                                <div className="col-10 mx-auto text-center 
                                text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-10 mx-auto 
                                col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                
                                
                                <div className="col-10 mx-auto 
                                col-md-6 my-3">
                                    <h3>Model: {title}</h3>
                                    <h4 className="text-title text-uppercase 
                                    text-muted mt-3 mb-2">
                                        Made By: 
                                        <span className="image-container p-3">
                                            <img src={company} alt="product" height="36px"/>
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold
                                    mt-3 mb-0">
                                        About Product:
                                    </p>
                                    <p className="text-muted lead text-justify">
                                        {info}
                                    </p>
                                    <Link to="/">
                                        <ButtonContainer>
                                                Back To Products
                                        </ButtonContainer>    
                                    </Link>
                                </div>
                            </div>

                        </div>
                        </DetailsWrapper>  
                    )
                }}
            </ProductConsumer>
        );
    }
}


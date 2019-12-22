import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        const priceTag = { 
            marginLeft:'30px'       
        };
        const eye = {
                marginBottom: '50px'
        };
        const titleSize = {
            fontSize:'14px'
        }
        const imageSize = {
            height: '190px',
            width:'200px',  
        }

        return (
            <ProductWrapper className="col-9 mx-auto col-sm-6 col-lg-3 my-3 " >
                <div className="card" >
                    <ProductConsumer>
                        {(value) => (
                        <div  className="img-container p-3" 
                            onClick={() => value.handleDetail(id)}>

                            <Link to="/details">
                                <img style={imageSize}  src={img} alt="product" 
                                className="card-img-top center img-fluid img-responsive"/>
                            </Link>

        <button className="eye-btn"

        onClick={() => {value.openModal(id)}}>  
            <i className="fas fa-eye"/>
        </button>
        
        <button className="cart-btn" disabled={inCart?true:false}
        onClick={() => {value.addToCart(id)}}>
        { inCart ? (
            <p className="text-capitalize mb-0" disabled>
            {" "}
            In Cart</p>
        ) : (
            <i className="fas fa-shopping-cart"/>
        )}
        </button>
    </div>)}
    </ProductConsumer>

    {/* card footer*/}
    <div className="footer">
    <div className="card-footer d-flex jsutify-content-between">
        <p className="align-self-center mb-0" style={titleSize}>{title}</p>
        <h5 className="text-blue font-italic mb-0">
            <b style={priceTag}>
            <span className="mr-1">$</span>
            <span>{price}</span>
            </b>
        </h5>
    </div>
</div> 
</div> 
            </ProductWrapper>   
         );
    }
    
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number
    }).isRequired
}

const ProductWrapper = styled.div `
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer {
        background: #dff9fb;
        border-top: transparent;
        transition: all 1s linear;

    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
        }
    }
    .img-container {
        position:relative;
        overflow:hidden;
    }
    .card-img-top {
        transition: all 0.4s ease-in;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.1);
        
    }
    .cart-btn {
        position:absolute;
        bottom: 0;
        right: 0;
        padding: 0.1rem 0.2rem;
        background: ${props => 
            props.cart ? "#48dbfb": "#22a6b3"};;
        border-radius: ${props => 
            props.cart ? "50%": "20px"};
        color: #273c75;
        transform: translate(100%, 100%);
        transition: all 0.4s ease-in;
        outline:none !important;
      }
      .cart-btn:hover {
          background: #dff9fb;
      }

      .eye-btn {
        position:absolute;
        right: 0;
        bottom:50px;
        padding: 0.1rem 0.2rem;
        color: #273c75;
        background: #EAB543;
        border-radius:20px;
        transform: translate(100%, 100%);
        transition: all 0.4s ease-in;
        outline:none !important;
      }

      .eye-btn:hover {
          background:#F8EFBA;
      }
      
`
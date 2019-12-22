import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';


export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="outer-div">
                <div className="py-5" className="page" className="inner-div">
                    <div className="container">
                    <Title name="" title="Smartphones"/>
                            <div className="row">
                            <ProductConsumer>
                                {value => {
                                        
                                        return value.products.map((product, key) => {
                                            return  <Product key={product.id} product={product} />;
                                      });
                                }}
                            </ProductConsumer>
                            </div>
                        
                    </div>
                </div>
                </div>
                
            </React.Fragment>
        );
    }
}
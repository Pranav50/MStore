import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products:[],
        detailProduct:detailProduct,
        cart:[],
        toast:'',
        modalOpen:false,
        modalProduct:detailProduct,
        cartTax:0,
        cartSubTotal:0,
        cartTotal:0
    }

    componentDidMount = () => { 
        this.setProducts();
        
        const cart = localStorage.getItem('myCart')
        this.setState({cart: JSON.parse(cart) ? JSON.parse(cart) : []}, this.addTotal)     
    }
    setProducts = () => {
        let tempProducts = [];
        let activeProducts = JSON.parse(localStorage.getItem("myCart"));

        storeProducts.forEach(item => {
          let singleItem = { ...item };
    
          if(activeProducts){
             activeProducts.forEach(i => {
             if (singleItem.id === i.id) {
               singleItem = i;
             }
           });
          } 
    
          tempProducts = [...tempProducts, singleItem];
        });

            this.setState(() => {
                return { products: tempProducts };
              });
      };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id===id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct:product}
        });
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart,
            product] };
        },
        () => {
            this.addTotal();
            localStorage.setItem('myCart', JSON.stringify(this.state.cart))
        });
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct:product, modalOpen:true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen:false}
        })
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {return{cart:[...tempCart]}}, 
        ()=> {this.addTotal();
            localStorage.setItem('myCart', JSON.stringify(this.state.cart))})
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        
        if(product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(() => {return{cart:[...tempCart]}}, 
            ()=> {this.addTotal();
                localStorage.setItem('myCart', JSON.stringify(this.state.cart))})
        }    
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);
        
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];

        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        }, () => {
            this.addTotal();
            localStorage.setItem('myCart', JSON.stringify(this.state.cart))
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {cart:[]}
        }, () => {
            this.setProducts();
            this.addTotal();
        })
        localStorage.removeItem('myCart')
    }

    paidSuccessfully = () => {
        this.clearCart();
        this.setState(() => {
            return {cart:[]}
        }, () => {
            this.setProducts();
        })
        localStorage.removeItem('myCart')
    }

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => {subTotal += item.total});
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal:total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                paidSuccessfully:this.paidSuccessfully
            }}>
                    {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }; 
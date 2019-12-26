import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CartButton} from './CartButton';
import {HomeButton} from './HomeButton';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
import { ProductConsumer } from '../context';

export default class Navbars extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
      const productLink = {
        textDecoration: 'none',
        color: '#636e72',
        '&:hover': {
          background: 'red'
        }
      };

      const homeLink = {
        color: '#341f97',
      }

      const cartLink = {
        color: '#341f97'
      }

      const navStyle = {
        backgroundImage:'linear-gradient(45deg, #82ccdd, #4a69bd, #b8e994)',
        position: 'fixed',
        top: '0',
        width:'100%',
        zIndex:'1',
        opacity: '0.96',
        borderRadius: '10px',
      };

      const cartCounter = {
        marginBottom:'-10px',
        fontSize:'12px',
        color:'#ecf0f1',
        background: '#eb4d4b',
        borderRadius: '50px',
        height:'20px',
        width:'20px',
        marginLeft:'2px'
      }
        return (
            <div>
        <Navbar style={navStyle} light expand="md">
          <NavbarBrand href="/">
            <img src="https://www.freelogoservices.com/api/main/images/1j+ojl1FOMkX9WypfBe43D6ki...6ApRBLkBnNwXs1M3EMoAJtlSUojvdj...Pw8" height="52px" width="80px"/>
          </NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <HomeButton>
                <NavItem>
                  <Link to="/" style={homeLink}><i className="fas fa-home fa-2x"></i></Link>
                </NavItem>
              </HomeButton>
              
              <ProductConsumer>
                {value => {
                  const {cart} = value;
                  {
                    return (
                      <React.Fragment>
                          <CartButton>
                            <NavItem>
                            <p style={cartCounter}>{cart.length}</p>
                              <Link to="/cart" style={cartLink}>
                                  
                              <i className="fas fa-shopping-cart">
                              </i>
                              </Link>
                            </NavItem>
                          </CartButton>

                      </React.Fragment>
                    )
                  }
                }}
              </ProductConsumer>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        );
    }
}


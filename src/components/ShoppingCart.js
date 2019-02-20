import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cart } = this.props;
    const values = Object.values(cart);

    return (
      <div className='container'>
        <h1>Shopping Cart</h1>
        <ul>
          {values.map(item => {
            return (
              <div
                className='item'
                style={{ margin: '1em' }}
                key={item.id}
                id={item.id}
              >
                <li>
                  <span>{item.title}</span>
                  {' | '}
                  <span>{item.price}</span>
                  {' | '}
                  <span>{item.inventory}</span>
                </li>
                <button
                  style={{ margin: '0.5em' }}
                  onClick={this.addToCart}
                  disabled={item.inventory ? false : true}
                >
                  {item.inventory ? 'Remove One' : 'Sold Out'}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(ShoppingCart);

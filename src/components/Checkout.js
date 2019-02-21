import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cart } = this.props;

    let totalPrice;
    let values = Object.values(cart);

    if (values.length) {
      totalPrice = values
        .map(item => item['price'] * item['inventory'])
        .reduce((sum, item) => sum + item)
        .toFixed(2);
    } else {
      totalPrice = 0;
    }
    // debugger;
    console.log(totalPrice);
    return (
      <React.Fragment>
        <h1>Checkout</h1>
        <h3>${totalPrice}</h3>
        <button>Checkout</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Checkout);

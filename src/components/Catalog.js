import React, { Component } from 'react';
import { connect } from 'react-redux';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addToCart = e => {
    const idToChange = e.target.parentNode.id;
    const toChange = this.props.products[idToChange];
    let { id, title, price, inventory } = toChange;

    const catalogUpdateItem = {
      id: id,
      title: title,
      price: price,
      inventory: (inventory -= 1)
    };

    let updateValue = 0;

    let { cart } = this.props;

    if (cart.hasOwnProperty(idToChange)) {
      updateValue = cart[idToChange].inventory + 1;
    } else {
      updateValue = 1;
    }

    const cartUpdateItem = {
      id: id,
      title: title,
      price: price,
      inventory: updateValue
    };

    this.props.addToCart([catalogUpdateItem, cartUpdateItem]);
  };

  render() {
    const { products } = this.props;
    const values = Object.values(products);

    return (
      <div className='container'>
        <h1>Catalog</h1>
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
                  {item.inventory ? 'Add To Cart' : 'Sold Out'}
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

const mapDispatchToProps = {
  addToCart: payload => ({ type: 'ADD_TO_CART', payload: payload })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);

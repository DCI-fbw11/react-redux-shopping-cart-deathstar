import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeItemFromCart = e => {
    const idToChange = e.target.parentNode.id;
    const itemFromCart = this.props.cart[idToChange];
    const itemFromCatalog = this.props.products[idToChange];

    const catalogUpdateItem = {
      id: itemFromCatalog.id,
      title: itemFromCatalog.title,
      price: itemFromCatalog.price,
      inventory: (itemFromCatalog.inventory += 1)
    };

    const cartUpdateItem = {
      id: itemFromCart.id,
      title: itemFromCart.title,
      price: itemFromCart.price,
      inventory: (itemFromCart.inventory -= 1)
    };
    // console.log('remove one item');
    this.props.removeItemFromCart({ catalogUpdateItem, cartUpdateItem });
  };

  removeAllItemsFromCart = e => {
    const idToChange = e.target.parentNode.id;

    const itemFromCart = this.props.cart[idToChange];
    const itemFromCatalog = this.props.products[idToChange];

    const catalogUpdateItem = {
      id: itemFromCatalog.id,
      title: itemFromCatalog.title,
      price: itemFromCatalog.price,
      inventory: itemFromCatalog.inventory + itemFromCart.inventory
    };

    this.props.removeAllItemsFromCart({ idToChange, catalogUpdateItem });
  };

  render() {
    const { cart } = this.props;
    const values = Object.values(cart);

    return (
      <div className='container'>
        <h1>Shopping Cart</h1>
        <ul>
          {values.map(item => {
            const { id, title, price, inventory } = item;
            return (
              <div className='item' style={{ margin: '1em' }} key={id} id={id}>
                <li>
                  <span>{title}</span>
                  {' | '}
                  <span>${price}</span>
                  {' | '}
                  <span>{inventory}</span>
                </li>
                <button
                  onClick={
                    item.inventory > 1
                      ? this.removeItemFromCart
                      : this.removeAllItemsFromCart
                  }
                >
                  Remove one
                </button>
                <button
                  className={
                    inventory > 1
                      ? 'remove-button-visible'
                      : 'remove-button-hidden'
                  }
                  onClick={this.removeAllItemsFromCart}
                >
                  Remove all
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
  removeItemFromCart: payload => ({
    type: 'REMOVE_ONE_ITEM',
    payload
  }),
  removeAllItemsFromCart: id => ({
    type: 'REMOVE_ALL_ITEMS',
    payload: id
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

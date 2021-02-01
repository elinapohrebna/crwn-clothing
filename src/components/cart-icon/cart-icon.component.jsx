import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartHidden} from '../../redux/cart/cart.actions.js'

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';
import {createStructuredSelector } from 'reselect';

const CartIcon = ({ toogleCartHidden,  itemCount}) => (
    <div className='cart-icon' onClick={ toogleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );


const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch( toogleCartHidden())
  });

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);
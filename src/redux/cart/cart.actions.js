import CartActionTypes from './cart.types';

export const toogleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const AddItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
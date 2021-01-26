import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss';


const CollectionItem = ({item, AddItem}) => {
    const { name, price, imageUrl } = item;
    return (
    <div className = 'collection-item'>
        <div 
        className = 'image'
        style= {{
        backgroundImage: `url(${imageUrl})` 
        }}
        >
         </div>
         <div className = 'collection-footer'>
            <span className = 'name'>{name}</span>
            <span className = 'price'>{price}</span>
        </div>
        <CustomButton onClick={() => AddItem(item)} inverted >
        Add to cart
        </CustomButton>

       

    </div>
)}

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})


export default connect (null, mapDispatchToProps)(CollectionItem);
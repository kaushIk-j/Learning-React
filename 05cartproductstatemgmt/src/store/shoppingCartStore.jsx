import { createContext, useReducer, useState } from 'react';
import { DUMMY_PRODUCTS } from '../products-list';
import { toast } from 'react-toastify';

export const CartContext = createContext({
    items: [],
    addCartitems: () => { },
    updateCartItems: () => { }
})

export const CartReducer = (state,actions) =>{

    switch (actions.type) {
        case  'ADD_ITEM' :{
            const updatedItems = [...state.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === actions.payload
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === actions.payload);
                updatedItems.push({
                    id: actions.payload,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }

            return {
                ...state, 
                items: updatedItems,
            };
        }   
        case 'UPDATE_ITEM' :{  

            const updatedItems = [...state.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === actions.payload.productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += actions.payload.amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                ...state,
                items: updatedItems,
            };
        }    
        default:
            return state;
    }


}



const CartContextProvider = ({ children }) => {

    const [shoppingCartState , shoppingCartDispatch ] = useReducer(CartReducer , {
        items : [],
    } )

    function handleAddItemToCart(id) {
        shoppingCartDispatch ({
            type : 'ADD_ITEM',
            payload : id
        });
        toast.success('product is added to cart')
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type : 'UPDATE_ITEM',
            payload :{
                productId,   
                amount
            }
        });
        toast.success('product quantitiy is updated')
    }

    const ctxtValue = {
        items : shoppingCartState.items,
        addCartitems : handleAddItemToCart,
        updateCartItems : handleUpdateCartItemQuantity
    }


    return < CartContext.Provider value={ ctxtValue } >
        {children}
    </CartContext.Provider>

}

export default CartContextProvider;


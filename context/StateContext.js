import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

//Context is global - manages the state of our entire app.
const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    // We accept product and quantity as parameters - product we want to add and quantity we want to add
    const onAdd = (product, quantity) => {
        // Is the item we are trying to add to cart already in the cart?
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        // we moved these states up so we can use in if and else statement below
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    /* To update cart, we map over cartItems to check if the id's match. If they do, we only want to increase subtotal price and quantity and not display the whole product image again as if it is an entirely new product */
        if(checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, {...product}]);
        }

        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);


        if(value === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
        } else if(value === 'dec') {
          if(foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
            }
        }
    }

    //increase quantity in cart
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    //decrease quantity in cart
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    // We are not rendering anything, just wrapping our children in Context Provider
    return (
        <Context.Provider
            value={{
               showCart,
               setShowCart,
               cartItems,
               totalPrice,
               totalQuantities,
               qty,
               incQty,
               decQty,
               onAdd,
               toggleCartItemQuantity,
               onRemove 
            }}
        >
            {children}
        </Context.Provider>
    )
}

// this function allows us to easily grab our state as a hook - we pass our own Context to useContext
export const useStateContext = () => useContext(Context);
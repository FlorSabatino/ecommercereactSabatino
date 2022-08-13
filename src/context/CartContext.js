import {createContext, useState} from "react";


const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cartProducts,setCartProducts] = useState ([])
    

    const addProductToCart = (product) =>{
        setCartProducts(cartProducts => [...cartProducts, product])
    }

    const clear = () => {
        setCartProducts([])
    }

    const removeItem = (id) =>{
        cartProducts.filter ((product) => product.id !== id)
    }
        const data ={
            cartProducts,
            setCartProducts,
            clear,
            addProductToCart,
            removeItem
        }
    
    
    return (
        <CartContext.Provider value={{data}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export {CartContext}
import {createContext, useState} from "react";


const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cartProducts,setCartProducts] = useState ([])
    const [totalProducts, setTotalProducts] =useState (0)
    const [totalPrice, setTotalPrice] = useState (0)
    

    const addProductToCart = (product) =>{
        let isInCart = cartProducts.find(cartItem => cartItem.id ===product.id)
        if(!isInCart){
            setTotalProducts(totalProducts + 1)
            setTotalPrice (totalPrice + product.price)
            return setCartProducts(cartProducts => [...cartProducts, product])
        }
        
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
            removeItem,
            totalProducts,
            totalPrice
        }
    
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export {CartContext}
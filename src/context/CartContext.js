import {createContext, useState} from "react";


const CartContext = createContext()
const CartProvider = ({children}) => {
    const [name, setName] = useState ('Flor')

    const handleClick = () => {
        console.log ("funcion desde context")
    }
        const data = {
            name,
            setName,
            handleClick
        }
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export {CartContext}
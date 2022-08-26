import {createContext, useState} from "react";


const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cartProducts,setCartProducts] = useState ([])
    const [totalProducts, setTotalProducts] =useState (0)
    const [totalPrice, setTotalPrice] = useState (0)
    

    const addProductToCart = (product) =>{

        const isInCart = cartProducts.find (
            (productInCart) => productInCart.id == product.id
        );
        if(isInCart){
            const newArray = cartProducts.map ((productInCart) => {
                if (productInCart.id == product.id) {
                    return{
                    ...productInCart,
                    sumarYrestar: productInCart.sumarYrestar + product.sumarYrestar,
                };
            }else{
                return productInCart;
            }
            });
            setCartProducts(newArray);
        }
        else {
            setCartProducts (cartProducts => [...cartProducts, product])
        }
            setTotalProducts(totalProducts + 1);
            setTotalPrice (totalPrice + product.price);
        }
        

    const clear = () => {
        setCartProducts([])
    }

    const removeItem = (id) =>{
       const newArray = cartProducts.filter ((product) => product.id !== id)
       setCartProducts(newArray)
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
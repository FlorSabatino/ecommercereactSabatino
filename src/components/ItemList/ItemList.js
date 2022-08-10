import ItemProduct from "../ItemProduct/ItemProduct"


const ItemList = ({dataProducto}) => {

        return (
            <>
                {dataProducto.map((producto) => {
                return <ItemProduct key={producto.id} data={producto}/>
            })}
            </>
        )
}

export default ItemList
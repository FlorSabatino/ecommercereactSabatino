


const ItemList = ({dataProducts}) => {
        return (
            <div>
                {listProducts.map((product) =>) {
                return <ItemProduct key={product.id} data={product}/>
                }
                
            </div>
        )
}

export default ItemList
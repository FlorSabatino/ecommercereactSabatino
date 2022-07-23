import ItemProduct from "../ItemProduct/ItemProduct"


const ItemListContainer = ({section}) => {
    const producto1 = { 
        title: "Sweater Rayado Blanco y Negro",
        price:2500,
        imagen:"/assets/img_0305i.png",
        stock: 6,
         }
        const producto2 = {
            price:3000 ,
            title:"Sweater Verde Militar" ,
            imagen:"/assets/img_0302i.png",
            stock: 4,
        }
            const producto3 = {
                price:3500 ,
                title:"Swater Gris con Volados" ,
                imagen:"/assets/img_0304i.png",
                stock: 5,
            }
            const producto4 ={
                price:2800,
                title:"Sweater Gris Manga Globo",
                imagen:"/assets/img_0299i.png",
                stock:7
            }
            const producto5 ={
                price:3100,
                title:"Sweater Polera Manteca",
                imagen:"/assets/img_0303i.png",
                stock: 3,
            }
            const producto6 ={
                price:2800,
                title:"Sweater Blanco y Camel",
                imagen:"/assets/img_0297i.png",
                stock: 5,
            }
            const producto7 = {
                price:3500, 
                title:"Sweater rayado Negro y Rojo",
                imagen:"/assets/img_0298i.png",
                stock: 4,
            }
                const producto8 = {
                price:2500,
                title:"Remera Rosa de Tiritas",
                imagen:"/assets/img_0288v.png",
                stock: 3,
                }

        const handleSubmit = () => {console.log ("Se agregó al carrito")}
    return (
        <div className='ListaProductos'>
                    <h3>Productos</h3>

        <ItemProduct data={producto1} action={handleSubmit}/>
        <ItemProduct data={producto2} action={handleSubmit}/>
        <ItemProduct data={producto3} action={handleSubmit}/>
        <ItemProduct data={producto4} action={handleSubmit}/>
        <ItemProduct data={producto5} action={handleSubmit}/>
        <ItemProduct data={producto6} action={handleSubmit}/>
        <ItemProduct data={producto7} action={handleSubmit}/>
        <ItemProduct data={producto8} action={handleSubmit}/>

        </div>
    )
}
export default ItemListContainer
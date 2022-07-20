import ItemProduct from "../ItemProduct/ItemProduct"
const ItemListContainer = () => {
    return (
        <div className='ListaProductos'>
                    <h3>Productos</h3>
        <ItemProduct price="2500" title="Sweater Rayado Blanco y Negro" image="/assets/img_0305i.png"/>
        <ItemProduct price="3000" title="Sweater Verde Militar" image="/assets/img_0302i.png"/>
        <ItemProduct price="3500" title="Swater Gris con Volados" image="/assets/img_0304i.png"/>
        <ItemProduct price="2800" title="Sweater Gris Manga Globo"image="/assets/img_0299i.png"/>
        <ItemProduct price="3100" title="Sweater Polera Manteca"image="/assets/img_0303i.png"/>
        <ItemProduct price="2800" title="Sweater Blanco y Camel" image="/assets/img_0297i.png"/>
        <ItemProduct price="3500" title="Sweater rayado Negro y Rojo" image="/assets/img_0298i.png"/>
        <ItemProduct price="2500" title="Remera Rosa de Tiritas" image="/assets/img_0288v.png"/>

        </div>
    )
}

export default ItemListContainer
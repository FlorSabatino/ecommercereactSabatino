const Contacto = () => {
    return (
        <>        <h2>Contacto</h2>

        <form >
                                    <span>Nombre Completo: </span>
                                    <input type='text' name='name' placeholder='Nombre' />
                                    <p/>
                                    <span>Telefono: </span>
                                    <input type='number' name='phone'placeholder='Telefono' />
                                    <p/>
                                    <span>Email: </span>
                                    <input type='email' name='email' placeholder='Mail'/>
                                    <p/>
                                    <span>Ingresa tu comentario: </span>
                                    <input type='text'name='text' placeholder='Ingresa tu comentario'></input>
                                    <p/>
                                    <button type='submit'>ENVIAR</button>
                                </form>
                                </>
    )
}

export default Contacto
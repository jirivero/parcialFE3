

const Form = ({setDatos, handleSubmit}) => {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" placeholder="Ingresa tu nombre"onChange={(e) => setDatos((prevState) => ({...prevState, name: e.target.value}))}/>
            <label>Color favorito:</label>
            <input type="text" placeholder="Ingresa tu color favorito" onChange={(e) => setDatos((prevState) => ({...prevState, color: e.target.value}))}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form;
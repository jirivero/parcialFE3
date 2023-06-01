


const Card = ({datos}) => {
  return <div style={{backgroundColor:datos.color}}>
    <h3>Hola {datos.name}!</h3>
    <h3>Tu color favorito es el {datos.color}</h3>
  </div>;
};


export default Card;
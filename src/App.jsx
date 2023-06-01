import { useState } from "react";
import Card from "./Card";
import Form from './Form';

function App() {
  
  const [datos, setDatos] = useState({
    name: '',
    color: '',
  })

  const [showCard, setShowCard] = useState(false)
  const [validation, setValidation] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(datos.name.trim().length > 3 && datos.color.length >= 3){
      setValidation(false)
      setShowCard(true)
      
    } else {
      setValidation(true)
      setShowCard(false);
      
    }
  }
  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} setDatos={setDatos}/>
      {validation && (
            <p>Por favor chequea que la información sea correcta</p>
          )}
      {showCard && <Card datos={datos}/>}
    </div>
  );
}


export default App;



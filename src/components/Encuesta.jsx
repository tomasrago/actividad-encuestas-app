import React from 'react';

function Encuestas({encuestas}){
  return(
    <div>
      <h2>Encuestas disponibles</h2>
      <ul>
        {encuestas.map( encuesta => (

            <li key ={encuesta.id}> 
              {encuesta.pregunta}

                <ul>
                  {
                    encuesta.opciones.map(opcion =>(
                      <li>
                        <input type='radio' value={opcion} id={opcion} name={`${encuesta.id}`}/>
                        {opcion};
                      </li>
                    
                ))}
                   
                </ul>
              
              </li>
    

          ))
        }
      </ul>
    </div>
  );

}

export default Encuestas;
import React from 'react'

import Tablaproductos from "./Tablaproductos";
import BotomAgregarProducto from "./BotomAgregarProducto";



function PedidoraDeDatos() {



    return (

        "hola como te va"

    );
}





const page = () => {
  return (
   
<div className="bg-gray-30 shadow-lg flex-grow">

<BotomAgregarProducto/>

<Tablaproductos/>


</div>
  )
}

export default page

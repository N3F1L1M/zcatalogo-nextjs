import React from 'react'
import Link from "next/link";

const Sidevar = () => {
  return (
   
  
    <aside className="w-64 h-screen bg-gray-800 text-white fixed p-5">
      <h2 className="text-xl font-bold">Menú</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/" className="block p-2 hover:bg-gray-700">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/servicios" className="block p-2 hover:bg-gray-700">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="block p-2 hover:bg-gray-700">
            Contacto
          </Link>
        </li>
      </ul>
    </aside>
  


   
  )
}

export default Sidevar

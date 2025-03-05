import React from 'react'

const page = () => {
  return (
   
<div className="bg-white shadow-lg rounded-lg p-4">

<div className="border-b pb-4 mb-4">
    <a
        name=""
        id=""
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        href="agregar.php"
        role="button"
        >Agregar Producto Nuevo</a>
</div>

<div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
        <thead>
            <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Titulo</th>
                <th className="border border-gray-300 px-4 py-2">Precio</th>
                <th className="border border-gray-300 px-4 py-2">Foto Portada</th>
                <th className="border border-gray-300 px-4 py-2">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                    <img width="100" src="@favicon.ico" className="rounded" alt=""/>
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                    <a className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" href="editar.php?txtID=" role="button">Editar</a>
                    <a className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" href="borrar.php?txtID=" role="button">Eliminar</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</div>
  )
}

export default page

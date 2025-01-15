const Carrito = (props) => {

    const { product, index } = props;

  return  <li 
    className="bg-gray-300 shadow-sm rounded-lg p-6 flex flex-grow justify-between mb-10" 
    key={index}> 
        <span className="text-xl text-blue-500 font-semibold">
            {product.titulo}
        </span> 
        <span className="text-xl text-green-500 font-semibold">
            {product.precio}
        </span> 
        <button className="bg-slate-500 hover:bg-slate-900 font-semibold py-2 px-4 rounded-lg">
            quitar del carrito
        </button>
        
    </li>
   
}

export default Carrito
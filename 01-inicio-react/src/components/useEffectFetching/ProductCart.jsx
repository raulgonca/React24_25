import Button from "./Button";

const ProductCart = (props) => {

    const { product, addCart } = props;
    

    const handleClick = () => {
        addCart(product);
        
    }

  return (
    <>
        <div  className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-2">{product?.titulo}</h2>
            <p className="text-gray-700 mb-4" >{product?.precio}</p>
            <Button 
                onClick={handleClick}
                className="bg-gray-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition" >
                Añadir carrito
            </Button>
            
        </div>
    </>
  )
}

export default ProductCart
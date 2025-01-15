import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Carrito from "./Carrito";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [totalCarrito , setTotalCarrito] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5173/src/data/db.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status`);
      }

      setProducts(await response.json());
    } catch (error) {
      console.log("Error en el fetch:", error);
    }
  };

  const addCart = (product) => {
    setCarrito((prevCarrito) => [...prevCarrito, product ]);
  }

  const totalCard = (carrito) => {
    return carrito.reduce((acc , producto) => acc + producto.precio, 0);
  }

  const removeCarrito = (product) => {

  }

  return (
    <>
      <div className=" w-full max-w-4xl mx-auto p-4">
        <h1 className=" text-2xl font-semibold text-center mb-6">Lista de libros</h1>
        {/*DIV que pinta las productCard */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map((product) => (
                    <ProductCart key={product.id} product={product} addCart={addCart} />
                ) )
            }
        </div>

        <br />
        <hr />
        {/*DIV que pinta el carrito */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">Carrito</h2>
          <p className="text-xl font-semibold text-center mt-3">Total del carrito: { totalCard(carrito) }</p>
          {carrito.length === 0 ? (
            <p>Carrito vacio</p>
          ) : (
            <ul>
              {carrito.map((product, index) => {
                return <Carrito key={index} product={product}  />;
                
              })}
            </ul>
          )}
        </div>
        
        
        
        
        
        
        {/* <p>
          {products.length > 0 &&
            products.map((product) => {
              // return (
              //     <div key={product.id}>
              //         <p>{product.title}</p>
              //         <p>{product.price}</p>
              //         <p>{product.tags}</p>
              //     </div>
              // )
            })} 
        </p>*/}
      </div>
    </>
  );
};

export default ProductList;

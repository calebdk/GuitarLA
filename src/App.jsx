import { useState } from 'react'
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import {db} from './data/db'

function App() {
 
    //asi definimos el state 
    //estado de la data -> inicia con la bd local
    const [data, setData]  =useState(db)

    //estado del carrito de compras -> inicia con un arreglo vacio
    const [cart, setCart] = useState([])
    

    function addToCart(item){
       const itemExists = cart.findIndex( (guitar) => guitar.id === item.id)
      if(itemExists >= 0){ //existe en el carrito
        const updateCart = [...cart]  //sacamos una copia del carrito
        updateCart[itemExists].quantity++  //sacamos la cantidad del carrito
        setCart(updateCart)  //actualizamos el carrito
      }
      else{
        item.quantity = 1
        setCart([...cart, item])
      }

       
    }



  return (
    <>

    <Header 
      cart={cart}
    />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                  <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    setCart={setCart}
                    addToCart={addToCart}
                  />
            ))}
           
        </div>
      
    </main>




    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App

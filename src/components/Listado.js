import React from "react";
import JSON from "./data.json";
import { Item } from "./Item";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export function Listado({carrito, setCarrito}) {
  return (
    <div className="container">
      {JSON.map((producto) => {
        return (
          <Item
            key={producto.id}
            producto={producto.producto}
            stock={producto.stock}
            carrito={carrito}
            setCarrito={setCarrito}
            
          />
        );
      })}
    </div>
  );
}

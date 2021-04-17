let productos = [];
let total = 0;

function add(producto, precio) {
  console.log(producto, precio);
  productos.push(producto);
  total += precio;
  document.getElementById("button-carrito").innerHTML = `Pagar $${total}`;
}

function pay() {
  window.alert(
    "Total de productos: \n" +
      productos.join(", \n") +
      "\nTotal a pagar: $" +
      total
  );
}

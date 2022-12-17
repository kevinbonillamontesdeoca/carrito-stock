const catalogo = [
    {id:1, nombre:" PS5", precio: 500},
    {id:2, nombre:" Xbox One", precio: 350},
    {id:3, nombre:" Nintendo Switch", precio: 300},
    {id:4, nombre:" God Of War: Ragnarök", precio: 60},
    {id:5, nombre:" FIFA 23", precio: 60},
    {id:6, nombre:" Pokemón Scarle/Violet", precio: 55}
]
const carrito = [];

let producto;
let mostrarProducto;
let confirProd = true;


const buscarCatalogo = (id)=>{
    return catalogo.find(item => item.id === id);
}

while(confirProd){
    mostrarProducto = parseInt(prompt("Nuestro Catálogo de Juegos, selecciona Items : " + catalogo.map(item=> "\n" +item.id + " - " + item.nombre + " $" + item.precio + "\n").join(" - ")));
    if(mostrarProducto >= 1 && mostrarProducto <= 6){
        producto = buscarCatalogo(mostrarProducto);
        confirProd = confirm("¿Deseas agregar algo más?");
    }else{
        alert("Items ingresado es erróneo");
    }
    carrito.push(producto);
}console.log(carrito);

confirProd = true;

let retirarProduc;
let mostrarProductos;

const buscarCarrito = (id)=>{
    return carrito.find(item => item.id === id);
}

let valTotal = 0;

while(confirProd){
    mostrarProductos = parseInt(prompt("Quieres retirar un producto, señala id: " + "\n" + "Productos a pagar: \n" + carrito.map(item=> "\n" +item.id + " - " + item.nombre + " $" + item.precio + "\n").join(" - ")));
    if(mostrarProductos>=1 && mostrarProductos <= 6){
        retirarProduc = buscarCarrito(mostrarProductos);
        carrito.splice(((retirarProduc.id)-1),1);
    }else{
        alert("Items ingresado es erróneo");
    }
    confirProd = confirm("¿Deseas retirar otro producto?");
}console.log(carrito);

for(productos of carrito){
    valTotal += productos.precio;
}alert("Gracias por la compra. El valor total de tu compra es: $" + valTotal);
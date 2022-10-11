//objetos

let stockProductos = [
    { id: 1, nombre: "producto1", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: './img/producto-1.png' },
    { id: 2, nombre: "producto2", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/producto-2.png' },
    { id: 3, nombre: "producto3", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/pasteleria.png' },
    { id: 4, nombre: "producto4", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/panaderia.png' },
    { id: 5, nombre: "producto5", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: './img/elaboration-4.png' },
    { id: 6, nombre: "producto6", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/producto-8.png' },
    { id: 7, nombre: "producto7", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/producto-4.png' },
    { id: 8, nombre: "producto8", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/producto-5.png' },
    { id: 9, nombre: "producto9", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: './img/postres.png' },
    { id: 10, nombre: "producto11", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/producto-7.png' },
    { id: 11, nombre: "producto12", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/producto-8.png' },
    { id: 12, nombre: "producto13", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/producto-9.png' },
    { id: 13, nombre: "producto14", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: './img/postres.png' },
    { id: 14, nombre: "producto15", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/modeloarte8.png' },
    { id: 16, nombre: "producto16", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/modelo0.png' },
    { id: 16, nombre: "producto17", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/modelo24.png' },
    { id: 17, nombre: "producto18", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: './img/modelo27.png' },
    { id: 18, nombre: "producto19", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/modelo23.png' },
    { id: 19, nombre: "producto20", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/modelo22.png' },
    { id: 20, nombre: "producto21", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/modelo20.png' },
    { id: 21, nombre: "producto22", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: './img/modelo25.png' },
    { id: 22, nombre: "producto23", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/modelo21.png' },
    { id: 23, nombre: "producto23", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/modelo19.png' },
    { id: 24, nombre: "producto24", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/modelo0.png' },

]
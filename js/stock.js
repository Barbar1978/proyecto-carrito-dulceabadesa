//objetos

let stockProductos = [
    {id: 1, nombre: "producto1", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: 'git '},
    {id: 2, nombre: "producto2", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: '../img/pasteleria.png'},
    {id: 3, nombre: "producto3", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: '../img/pasteleria.png'},
    {id: 4, nombre: "producto4", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/pul-4.png'},
    {id: 5, nombre: "producto5", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: '../img/producto-4.png'},
    {id: 6, nombre: "producto6", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/pul-2.png'},
    {id: 7, nombre: "producto7", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/pul-3.png'},
    {id: 8, nombre: "producto8", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/pul-4.png'},
    {id: 9, nombre: "producto9", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: '../img/producto-4.png'},
    {id: 10, nombre: "producto11", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/pul-2.png'},
    {id: 11, nombre: "producto12", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/pul-3.png'},
    {id: 12, nombre: "producto13", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/pul-4.png'},
    {id: 13, nombre: "producto14", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: '../img/producto-4.png'},
    {id: 14, nombre: "producto15", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/pul-2.png'},
    {id: 16, nombre: "producto16", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/pul-3.png'},
    {id: 16, nombre: "producto17", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/pul-4.png'},
    {id: 17, nombre: "producto18", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: './img/elaboration-3.png'},
    {id: 18, nombre: "producto19", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/pul-2.png'},
    {id: 19, nombre: "producto20", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/pul-3.png'},
    {id: 20, nombre: "producto21", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/pul-4.png'},
    {id: 21, nombre: "producto22", tipo: "pasteleria", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "A", img: '../img/producto-4.png'},
    {id: 22, nombre: "producto23", tipo: "panaderia salada", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1100, opcion: "B", img: './img/pul-2.png'},
    {id: 23, nombre: "producto23", tipo: "panaderia dulce", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1200, opcion: "C", img: './img/pul-3.png'},
    {id: 24, nombre: "producto24", tipo: "tortas y tartas", cantidad: 1, desc: "RECETAS DULCES Y SALADAS PARA TODO MOMENTO Y OCASION", precio: 1400, opcion: "D", img: './img/pul-4.png'},

    ]
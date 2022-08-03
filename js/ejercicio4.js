class Producto {
    constructor(codigo,nombre,precio){
        this.codigo=codigo,
        this.nombre=nombre,
        this.precio=precio
    }
    get producto(){
        return this.ingresarProducto();
    }
    ingresarProducto(){
        return this.codigo + this.nombre + this.precio;
    }
}

let producto1 = new Producto (' 123 ',' aceite ',' $399 ');
console.log(producto1.producto);

let producto2 = new Producto (' 3422 ',' azucar ',' $122 ');
console.log(producto2.producto);

let producto3 = new Producto (' 1101 ',' leche ',' $199 ');
console.log(producto3.producto);
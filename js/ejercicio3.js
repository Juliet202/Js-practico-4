class Rectangulo {
    constructor (alto,ancho) {
        this.alto=alto;
        this.ancho=ancho;
    }
    get areaRectangulo (){
    return this.calcularArea();

    }

    calcularArea(){
        return this.alto * this.ancho;
    }

    get perimetroRectangulo(){
        return this.calcularPerimetro();
    }

    calcularPerimetro(){
        return 2* (this.alto + this.ancho);
    }
}

let rectangulo1 = new Rectangulo (23,12);
console.log(rectangulo1.areaRectangulo);

let rectangulo2 = new Rectangulo (23,12);
console.log(rectangulo2.perimetroRectangulo);

//CLASES

class Animales {
    constructor(nombre, especie,estado) {
        this.nombre = nombre;
        this.especie = especie;
        this.estado=estado
    }
    
    canta() {
        return `${this.nombre} puede cantar`;
    }
    
    baila() {
        return `${this.nombre} puede bailar`;
    }
}

let bongo = new Animales("Bongo", "Peludo");
console.log(bongo);



/*El <prototype> hace referencia al prototipo de Animales (que a su vez hace referencia al prototipo de Object).
A partir de esto, podemos ver que el constructor define las características principales,
mientras que todo lo que está fuera del constructor (canta() y baila()) son las características adicionales (prototipos).
En segundo plano, utilizando el enfoque de la palabra clave new, lo anterior se traduce en: */

function Animales(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
}

Animales.prototype.canta = function(){
    return `${this.nombre} puede cantar`;
}

Animales.prototype.baila = function() {
    return `${this.nombre} puede bailar`;
}

let bongo = new Animales("Bongo", "Peludo");


//SUBCLASES

/*Esta es una característica en POO, donde una clase hereda características de una clase padre, pero posee características adicionales que el padre no tiene.
La idea aquí es, por ejemplo, decir que quieres crear una clase de Gatos. En lugar de crear la clase desde cero, indicando de nuevo las propiedades del nombre, 
la edad o la especie, heredaría esas propiedades de la clase padre Animales.
Esta clase Gatos puede tener propiedades adicionales como el color de los bigotes. Veamos cómo se hacen las sub-clases con class.
Aquí, necesitamos un padre del que herede la sub-clase. Examinemos el siguiente código: */

class Animales {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    canta() {
        return `${this.nombre} puede cantar`;
    }
    
    baila() {
        return `${this.nombre} puede bailar`;
    }
}

class Gatos extends Animales {
    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad);
        this.colorBigotes = colorBigotes;
    }
    
    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }
}

let clara = new Gatos("Clara", 33, "índigo");
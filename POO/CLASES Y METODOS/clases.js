/*class vehiculo {
    constructor(tipo,marca,color,placa,soat,revision,ejes){
        this.tipo=tipo;
        this.marca=marca;
        this.color=color;
        this.placa=placa;
        this.soat=soat;
        this.revision=revision;
        this.ejes=ejes;
    }

    avanza(){
        return this.tipo + " esta avanzando"
    }
    retrocede(){
        return " puede retroceder"
    }

    vuela(){
        return " puede volar"
    }
}


class Motos extends Vehiculo{
constructor(marca,color,placa,casco)

}
let moto1 = new Motos()
console.log(moto1);
console.log(moto1.avanza())
*/

class Mascota {
    constructor(nombre,raza,edad,color){
        this.nombre=nombre;
        this.raza=raza;
        this.edad=edad;
        this._color=color;
        
    }

ladra(){
    return this.nombre + ' está ladrando'
}

canta(){
    return this.nombre + ' puede cantar'
}

vuela(){
    return this.nombre + 'puede volar'
}

nada(){
    return this.nombre + ' esta nadando'
}

salta(){
    return this.nombre + ' puede saltar'
}


};

class perro extends Mascota{
    constructor(nombre,raza,edad,color,tamaño,vacunas){
        super(nombre,raza,edad,color)
        this.tamaño=tamaño;
        this.vacunas=vacunas
    }


}


class pajaros extends Mascota{
    constructor(nombre,raza,edad,color,tamañoPico,){}

}


let mascota1 = new perro("Polo","Pitbull","2 años","blanco","grande",2);

console.log(mascota1.ladra());
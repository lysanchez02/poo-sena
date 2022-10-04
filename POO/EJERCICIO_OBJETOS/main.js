function Vehiculo(linea,marca,color,placa,ejes,cilindrada){
this.linea = linea
this.marca = marca
this.color = color
this.placa = placa
this.ejes = ejes
this.cilindrada = cilindrada
}

const moto1 = new Vehiculo (
"AX100",
"SUZUKI",
"NEGRO",
"WHR-44A",
2,
98
)

const carro1 = new Vehiculo(
"sparkGT",
"CHEVROLET",
"ROJO",
"SPV-PK5",
2,
1026,
)

const moto2 = new Vehiculo(
"BOXER",
"BAJAJ",
"GRIS",
"FOS-39A",
2,
100,
)

const carro2 = new Vehiculo(
"HILUX",
"TOYOTA",
"BLANCO",
"JKM-27D",
2,
2393,
)

const moto3 = new Vehiculo(
"DT",
"YAMAHA",
"NEGRA",
"WHR-34B",
2,
125
)

const carro3 = new Vehiculo(
"PRADO TXL",
"TOYOTA",
"GRIS",
"SJF-823",
2,
3956
)

const camion1 = new Vehiculo(
"FRR 2L6",
"CHEVROLET",
"BLANCO",
"DKS-DJ0",
3,
5193
)

const camion2 = new Vehiculo(
"SINOTRUCK",
"KENWORTH",
"NEGRO",
"JDL-DJ4",
4,
10800
)

const camion3 = new Vehiculo(
"TRACOMULA",
"DAEWO",
"GRIS",
"DKS-455",
4,
10500
)

const moto4 = new Vehiculo(
"klx",
"KAWASAKI",
"VERDE",
"SKD-44F",
2,
150
)

var vehiculos = []

vehiculos.push(moto1);
vehiculos.push(moto2);
vehiculos.push(moto3);
vehiculos.push(moto4);
vehiculos.push(carro1);
vehiculos.push(carro2);
vehiculos.push(carro3);
vehiculos.push(camion1);
vehiculos.push(camion2);
vehiculos.push(camion3);

console.log (vehiculos)
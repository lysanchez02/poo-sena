
function diaDeLaSemana(dia,nombre){
    this.dia= dia
    this.nombre=nombre
}











let dia1 = new diaDeLaSemana(
    lunes
)

let dia2 = new diaDeLaSemana(
    martes
)


let lunes = ["Maria"]
let martes = ["Juan"]
let miercoles = ["Julian"]
let jueves = ["Pedro"]
let viernes = ["Marisa"]

let aseoSemana = []

aseoSemana.push(lunes,martes,miercoles,jueves,viernes)

function diaSemana(){
let Dia = prompt("ingrese el dia");
    if (Dia=="lunes")
 {
    document.write("El aseo le corresponde a : "+ lunes) ; 
 

}
 
else
if(Dia=="martes"){
   document.write("El aseo le corresponde a : "+ martes);
}
else 
if(Dia=="miercoles"){
   document.write("El aseo le corresponde a : "+ miercoles);
}
else 
if(Dia=="jueves"){
   document.write("El aseo le corresponde a : "+ jueves);
}
else 
if(Dia=="viernes"){
   document.write("El aseo le corresponde a : "+ viernes);
}
}

diaSemana();
function person(nombre,apellidos,edad,identificacion,){
    this.nombre=nombre
    this.apellidos=apellidos
    this.edad=edad
    this.identificacion=identificacion
}
var persona=[]
for (i=1;i=10;i++){
     persona[i] = new person(
      n=window.prompt("Ingrese su nombre"),
      window.prompt(n+" Ingrese su apellido"),
      window.parseInt(prompt(n+" Ingrese su edad")),
      window.parseInt(prompt("Ingrese su numero de identificacion")),
     )
     
}
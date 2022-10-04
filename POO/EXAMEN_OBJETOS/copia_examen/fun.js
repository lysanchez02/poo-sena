function examen (nombre, apellido, edad, telefono)
{
    this.nombre= nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.telefono=telefono;

}
var i= parseInt(prompt('ingrese el numero de usuarios a registrar:'));
var lista =[]
for (var n = 1; n <= i; n++)

{
    lista [n]= new examen (
    p = prompt ('usuario' +n+ 'ingrese su nombre:'),
    prompt ('usuario' +p+ 'ingrese su apellido:'),
    prompt ('usuario' +p+ 'ingrese su edad:'),
    prompt ('usuario' +p+ 'ingrese su telefono:'),
    )
}
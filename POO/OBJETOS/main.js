// Objeto Literal en JS   

const natalia = {
    name : 'Natalia',
    age : 32,
    married : true,
    children : [
        'Antonia',
    ],

    add_child(new_child){
        this.children.push(new_child);
    }
};

// agregar un hijo mas 
//natalia.children.push('Mariana');
//natalia.age = 39
//natalia.name = 'NATUCHA'
//natalia.add_child('Mariana'); 
////
// prototipo Person
function Person (name, age, married, children) {
    this.name = name;
    this.age = age;
    this.married = married;
    this.children = children;
    this.add_child = function(new_child){
        this.add_child.push(new_child);
    }
}


// creacion instancia paola de Person
const paola = new Person(
    'Paola',
    37, 
    true,
    [
        'Mariana',
        'Emmanuel',
    ], 
);
const micaela = new Person(
    'Micaela',
    17, 
    false,
    [],
);

// lista de  personas
var personas = [];
personas.push(paola);
personas.push(micaela);


//Prototipos con sintaxis de clases 

class Persona {
    constructor(name, age, married, children){
        this.name = name;
        this.age = age;
        this.married = married;
        this.children = children

    }

    //metodos
    add_child (new_child){
        this.add_child.push(new_child);
    }    
}

// creamos un objeto diego de Persona 
const diego = new Persona(
    'Diego',
    18,
    true,
    [
        'Mariana',
        'Emmanuel',
    ],
);
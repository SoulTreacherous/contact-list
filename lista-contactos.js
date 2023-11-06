/*
// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
// Crea una función para añadir un nuevo contacto a una lista
// Crea una función para borrar un contacto existente de la lista
// Crea una función para imprimir en consola los contactos presentes en la lista
// Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros.
*/


// almacenar la siguiente información como objetos:
// id
// nombres
// apellidos
// teléfono
// ubicaciones
// ciudad
// dirección

// let listContacts = [["José Martinez"], ["Teresa Jimenez"], ["Arturo smith"]];

let listContacts = [
  //primer objeto
  {
    id: 1,
    nombres: "Jose",
    apellidos: "Martinez",
    telefonos: 5554449991,
    ubicaciones: "en su hogar",
    ciudad: "desconocido",
    direccion: "al lado de los desconocido"
  },
  //segundo objeto
  {
    id: 2,
    nombres: "Teresa",
    apellidos: "Jimenez",
    telefonos: 123456789,
    ubicaciones: "la esquina",
    ciudad: "metropolis",
    direccion: "la otra cuadra" ,
  },
  //tercer objeto
  {
    id: 3,
    nombres: "Arturo",
    apellidos: "Smith",
    telefonos: 987654321,
    ubicaciones: "agua mala",
    ciudad: "rascacielo",
    direccion: "la redoma"
  }
]

function agregarContacto(nombre) {
  listContacts.push(nombre);
}

let nuevoContacto = {
  id: 4,
  nombres: "María",
  apellidos: "García",
  telefono: "456-789-0123",
  ubicaciones: [],
  ciudad: "",
  direccion: ""
};

function eliminarContacto(id) {
  const nuevosContactos = listContacts.filter(nombre => nombre.id !== id);
  listContacts = nuevosContactos;
}

function printContacts() {
  console.log(listContacts);
}

agregarContacto(nuevoContacto);
eliminarContacto(2);

printContacts();

/*
function eliminarContacto(nombre) {
  const nuevosContactos = [];
  for (let i = 0; i < listContacts.length; i++) {
    if (listContacts[i][0] !== nombre) {
      nuevosContactos.push(listContacts[i]);
    }
  }
  listContacts = nuevosContactos;
}
*/
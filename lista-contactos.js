// Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres
// Crea una función para añadir un nuevo contacto a una lista
// Crea una función para borrar un contacto existente de la lista
// Crea una función para imprimir en consola los contactos presentes en la lista
// Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros.

let listContacts = [["José Martinez"], ["Teresa Jimenez"], ["Arturo smith"]];

function agregarContacto(nombre) {
  listContacts.push([nombre]);
}

function eliminarContacto(nombre) {
  const nuevosContactos = [];
  for (let i = 0; i < listContacts.length; i++) {
    if (listContacts[i] !== nombre) {
      nuevosContactos.push(listContacts[i]);
    }
  }
  listContacts = nuevosContactos;
}

function printContacts() {
  console.log(listContacts);
}

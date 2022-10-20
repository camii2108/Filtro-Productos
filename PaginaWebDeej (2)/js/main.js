const hoteles = hotel[
  { nombre: "Camila", habitacion: 301, huespedes: "uno" },
  { nombre: "Gabriel", habitacion: 302, huespedes: "dos" },
  { nombre: "Pilar", habitacion: 303, huespedes: "dos" }

]

let catalogoHoteles = new CatalogoHoteles("hoteles");
console.log("CATALOGO HABITACIONES", catalogoHoteles.hoteles)



//const catalogoHoteles = new CatalogoHoteles ([]);


mostrarMenu()


function mostrarMenu() {
  let opcion = "";
  while (opcion !== "10") {
    opcion = prompt(`Ingrese una opción:
                        1. Ingresar huesped
                        2.Crear reserva en el hotel
                        3.Datos fecha de viaje
                        3.Datos buscar habitacion
                        10. Fin`)
    switch (opcion) {
      case "1": // Crear Villano
        crearUsuario()
        break;
      case "2": // Crear Reserva
        crearReserva()
        break;

      case "3": // Datos fecha de viaje
        travelDate()
        break;

      case "4": // Buscar usaurio
        buscarHabitacion()
        break;
    
      case "10":
        alert("Gracias")
        break;
      default:
        alert("Opción Inválida")
        break;
    }
  }
}



/*----------------------------
hacer el registro de la habitacion que desea reservar y datos del usuario*/

function crearUsuario() {
  let correo = ""              /*declaro mis variables */
  let contraseña = ""
  init();


  function init() /*inicio mi funcion donde  */ {
    pedirDatos()
    let esValido = validarDatos(correo, contraseña)
    validarLogin(esValido)
  }

  function pedirDatos() {
    correo = prompt("Ingrese correo con el que se registro")
    contraseña = prompt("Ingrese Contraseña")

  }

  function validarDatos(correo, contraseña) {
    let esValido = false;
    if (correo === "camilagros04@gmail.com" && contraseña === "pwd") {
      esValido = true;
    }
    return esValido;
  }

  function validarLogin(isValid) {
    if (!isValid) {
      alert("ERROR")
      init();

    }
    else {
      alert("LOGIN EXITOSO")
    }
  }
}
/*----------------------------
hacer el registro de la habitacion que desea reservar y datos del usuario*/

class User1 {
  constructor(nombre, habitacion, huespedes) {
    this.nombre = nombre;
    this.habitacion = habitacion;
    this.huespedes = huespedes;
  }

  nombreAndhuesped() {
    this.nombre + " " + this.habitacion
  }

}
crearReserva()
function crearReserva() {
  let nombre = prompt("Ingrese un nombre")
  let habitacion = prompt("Ingrese una edad")
  let huespedes = prompt("Ingrese cant de huespedes")

  const userx = new User1(nombre, habitacion, huespedes);
  // agregarHotel=> agregarReseva
  console.log(userx);

  /*const nombreAndhuesped = nombreAndhuesped();
  console.log("Name and Last Name", nombreAndhuesped);*/
  alert(`Gracias, por su reserva: ${nombre}\n${habitacion}`);
}

function travelDate() {
  let date = prompt("Enter travel date (dd/mm/yy)")//-->Variables locales

  alert(`Perfect,Your travel date is ${date}`)
}





/*----------------------------
    hacer el filtro de las habitaciones*/
function buscarHabitacion() {
  let nombreABuscar = prompt("Ingrese el nombre que quiere buscar");
  hotel.buscar(nombreABuscar);

}





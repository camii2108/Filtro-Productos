programarBotonLogin()

function programarBotonLogin() {
  const btn = document.getElementById("btnLogin");
  btn.addEventListener("click", () => { //escuchador de eventos
    procesarLogin();
  })
}

function procesarLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("completa los datos")
  }
  else {
    if (username === "cami" && password === "pwd") {
      alert("credenciales correctas")
    }
    else {
      alert("password invalido")
    }
  }
}


programarBotonFormularioReserva()

function programarBotonFormularioReserva() {
  const btn2 = document.getElementById("btnReserva");
  btn2.addEventListener("click", () => { //escuchador de eventos
    crearReserva();
  })
}



class User1 {
  constructor(nombre, habitacion, huespedes) {
    this.nombre = nombre;
    this.habitacion = habitacion;
    this.huespedes = huespedes;
  }

}

crearReserva()
function crearReserva() {
  const nombre = document.getElementById("nombre").value;
  let habitacion = document.getElementById("habitacion").value;
  let huespedes = document.getElementById("huespedes").value;

  const userx = new User1(nombre, habitacion, huespedes);
  // agregarHotel=> agregarReseva
  console.log(userx);

  /*const nombreAndhuesped = nombreAndhuesped();
  console.log("Name and Last Name", nombreAndhuesped);*/
  alert(`Gracias, por su reserva:  \n "nombre:" ${nombre} \n"Nro de habitacion:"${habitacion} \n"NroHuespedes"${huespedes} `);
}

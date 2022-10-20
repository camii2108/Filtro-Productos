class CatalogoHoteles{
    constructor(reserva){
        this.reservas=reserva;
    }

 agregarReserva(reserva){
    this.reservas.push(reserva);
 }

 
}

buscar(nombreABuscar)
{
  let esta = this.reservas.some((reserva) =>
    reserva.nombre.includes(nombreABuscar)
  )

  if (esta) {
    alert("LO ENCONTRE")

    let filtrado = this.reservas.filter((reserva) =>
      reserva.nombre.includes(nombreABuscar)
    )

    console.table("ESTO ENCONTRÉ", filtrado);
  }
  else {
    alert("NO LO ENCONTRÉ")
  }
}
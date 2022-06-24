let saldoCuenta = 100
let precioViaje = 30

const encabezado = document.getElementById("encabezado")
const botonPagar = document.getElementById("pagar")
const recargar = document.getElementById("recarga")
const cerrar = document.getElementById("cerrar")
const boton50 = document.getElementById("recarga50")
const boton100 = document.getElementById("recarga100")
const boton500 = document.getElementById("recarga500")
const boton1000 = document.getElementById("recarga1000")

encabezado.innerHTML += `<p class="saldoSube" id="saldoSube" >SALDO: AR$ ${saldoCuenta} </p>`
botonPagar.addEventListener("click", () =>{
    if(saldoCuenta > -30){
        saldoCuenta -= precioViaje
        Swal.fire({
            icon: 'success',
            title: `Pago concretado`,
            text: `Su saldo ahora es: $${saldoCuenta}`
          })
          encabezado.innerHTML = `<p class="saldoSube" id="saldoSube" >SALDO: AR$ ${saldoCuenta} </p>`
    }else{
        Swal.fire({
            icon: 'error',
            title: `Saldo insuficiente`,
            text: "Por favor cargue su SUBE"
        })   
    }
})
cerrar.addEventListener("click", () =>{
    document.getElementById("cuadroRecarga").classList.add("inactivo")
})
recargar.addEventListener("click", () =>{
    document.getElementById("cuadroRecarga").classList.remove("inactivo")
})  
boton50.addEventListener("click", () =>{
    saldoCuenta += 50
    encabezado.innerHTML = `<p class="saldoSube" id="saldoSube" >SALDO: AR$ ${saldoCuenta} </p>`

})
boton100.addEventListener("click", () =>{
    saldoCuenta += 100
    encabezado.innerHTML = `<p class="saldoSube" id="saldoSube" >SALDO: AR$ ${saldoCuenta} </p>`

})
boton500.addEventListener("click", () =>{
    saldoCuenta += 500
    encabezado.innerHTML = `<p class="saldoSube" id="saldoSube" >SALDO: AR$ ${saldoCuenta} </p>`

})
boton1000.addEventListener("click", () =>{
    saldoCuenta += 1000
    encabezado.innerHTML = `<p class="saldoSube" id="saldoSube" >SALDO: AR$ ${saldoCuenta} </p>`

})

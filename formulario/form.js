/*const form = document.getElementById("form")
console.log(form)*/

function guardarInformacion() {
   // event.preventDefault()
   // const formData = new FormData(event.srcElement)

     nombre= document.getElementById("nombre")
   // const formData = new FormData()
  // const nombre = formData.get("nombre")
  //  const apellido = formData.get("apellido")
 //  const correo = formData.get("correo")
 //   const password = formData.get("password")

    alert();

    /* guardar en localStorage   
    const persona = {
        nombre,
        apellido,
        correo,
        password
    }
    localStorage.setItem(correo, JSON.stringify(persona))*/ 
    location.href = "../index.html";
}


/*form.addEventListener("submit", (event) => {
    guardarInformacion(event)
})*/
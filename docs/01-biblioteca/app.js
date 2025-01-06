/*const cultivoPapa = document.getElementById("pestaña papa");

function abrirPestaña(papa){
    if (papa.open){
        document.write(cultivoPapa);
    }
}
cultivoPapa.addEventListener("click", () => {
    dialog.showModal();
    abrirPestaña(papa);    
});*/
/*const pestanaPapa = document.getElementById("pestaña_papa")
const botonAbrirPapa = document.getElementById("Cultivo_papa");
const botonCerrarPapa = document.getElementById("cerrar_papa");

botonAbrirPapa.addEventListener("click", ()=>{
    pestanaPapa.show();
});
botonCerrarPapa.addEventListener("click", ()=>{
    pestanaPapa.close();
})
*/

fetch("https://api.escuelajs.co/api/v1/users")
.then((Response)=> Response.json())

.then((data)=>{
    for (const usuario of data) {
        // Validar si el producto tiene los datos necesarios
        if (!usuario.avatar || !usuario.id || !usuario.name) {
          console.warn("Producto incompleto:", producto);
          continue; // Salta al siguiente producto si falta algo
        }
    }

    for(usuario of data){
        const estante = document.getElementById("estante")

        const productoDiv = document.createElement("div")

        const imagenProducto = document.createElement("img")
        imagenProducto.src = usuario.avatar;

        const idProducto = document.createElement("span")
        idProducto.textContent = usuario.id;

        const catDescription = document.createElement("p")
        catDescription.textContent = usuario.name;

        productoDiv.appendChild(imagenProducto);
        productoDiv.appendChild(idProducto);
        productoDiv.appendChild(catDescription);

        estante.appendChild(productoDiv);
    }
})
.catch((error)=>{
    console.log("hubo un error",error)
})
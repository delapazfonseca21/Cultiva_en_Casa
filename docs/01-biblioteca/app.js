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
const pestanaPapa = document.getElementById("pestaña_papa")
const botonAbrirPapa = document.getElementById("Cultivo_papa");
const botonCerrarPapa = document.getElementById("cerrar_papa");

botonAbrirPapa.addEventListener("click", ()=>{
    pestanaPapa.show();
});
botonCerrarPapa.addEventListener("click", ()=>{
    pestanaPapa.close();
})
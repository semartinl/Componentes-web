let contador = 0
let spanContador = document.body.querySelector("span.contador")
let boton = document.body.querySelector("button")
spanContador.textContent = contador


function aumentarContador() {
    contador++;
    console.log(contador)
    spanContador.textContent = contador
    
    
}
boton.addEventListener("click", ()=>aumentarContador())
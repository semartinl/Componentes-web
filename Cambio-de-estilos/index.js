let numberElement = document.getElementById("number-elements")

document.addEventListener("input",(event)=>{
    let target = event.target;
    let value = target.value;
    let mainHTML = document.getElementById("main")
    for (let index = 0; index < value; index++) {
        let element = document.createElement("div");
        element.setAttribute("class","style-element")
        mainHTML.appendChild(element)
        
    }

})
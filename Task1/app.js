"use strict";
let element = document.querySelector("#testBtn");
if (element)
    element.addEventListener("click", handler);
function handler(e) {
    let p = document.createElement("p");
    p.innerText = "You clicked me!";
    let container = document.getElementById("container");
    if (container)
        container.append(p);
}

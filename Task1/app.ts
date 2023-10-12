let element = document.querySelector("#testBtn");

if (element)
    element.addEventListener("click", handler);

function handler(e: Event): void {
    let p = document.createElement("p");
    p.innerText = "You clicked me!"

    let container = document.getElementById("container");

    if(container)
        container.append(p)
}
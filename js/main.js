/* 
BOM
window;
alert();
confirm();
prompt();

DOM
getElementById('id');
getElementsByClassName('class');
getElementsByTagName('tag');
getElementsByName('name');

querySelector('selector');
querySelectorAll('selector');


createElement('element');

*/

let home = document.getElementById('home');

console.log(home);

home.classList.add('home')
home.innerHTML = "<h1>Hola desde el DOM<h1>";


let services = document.getElementsByClassName('service');
console.log(services);


for(let i = 0; i < services.length; i++){
    console.log(services[i]);
}

let elementsP = document.getElementsByTagName('p');
console.log(elementsP);


let hobbies = document.getElementsByName('hobbies');
console.log(hobbies);


let home2 = document.querySelector('#home');
console.log(home2);

let services2 = document.querySelectorAll('.service');
console.log(services2);

let hobbies2 = document.querySelectorAll('[name=hobbies]');
console.log(hobbies2);

home2.style.fontFamily = "Verdana";
home2.style.fontSize = "40px";
home2.style.borderBottom = "3px solid red";

let sectionService = document.querySelector('#services');
let h3s = sectionService.querySelectorAll('h3');
h3s.forEach((h3) => {
    h3.style.color = "blueviolet";
})

console.log(typeof(h3s));


let div = document.createElement('div');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let textoP = document.createTextNode('Content Service 5');

h3.innerHTML = "<i>Services 5</i>"; // puedo combinar texto + html
h3.innerText = "Services 5.1"; // aqui puedo usar solo texto
p.appendChild(textoP);

div.appendChild(h3)
div.appendChild(p);
div.classList.add('service');

sectionService.appendChild(div); // Añadir un elemento al documento


let p4 = document.querySelector('#services .service:nth-child(4) p');
console.log(p4);
p4.style.backgroundColor = "yellow";
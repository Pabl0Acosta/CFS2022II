let contenedor =document.getElementById("contenedor");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
        for(let item of data){
        contenedor.innerHTML += `
       <li>${item.name} </li>
       `
    }
});
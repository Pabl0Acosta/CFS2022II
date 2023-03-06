let contenedor =document.getElementById("contenedor");

fetch("https://jsonplaceholder.typicode.com/photos")
.then(response => response.json())
.then(data => {
        for(let item of data){
        contenedor.innerHTML += `
       <src>${item.url} </src>
       `
    }
});
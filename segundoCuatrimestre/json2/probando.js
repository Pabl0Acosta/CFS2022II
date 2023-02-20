let datos = fetch("productos.json");
let convertir = datos.then(response =>response.json());
console.log(convertir)

//fetch realiza la solicitud, la pagina devuelve un response, y convertimos ese response en un .json
//click derecho en el index, abrir en live, inspeccionar el live y elegir consola para ver los arreglos del .json


let contenedor = document.getElementById("contenedor");

function crearCards(arreglo){
    for(let item of arreglo){
        contenedor.innerHTML += `
        <div class="card">
            <img src=${item.imagen} alt="">
        <div class="info">
            <p> <strong> Nombre: </strong> ${item.nombre} </p>
            <p> <strong> Precio: </strong> U$D ${item.precio} </p>
            <p id="unidad"> <strong> Unidades: </strong> ${item.cantidad} </p>
        </div>
        </div>
        `
    }
}

crearCards(productos);
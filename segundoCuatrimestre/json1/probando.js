//var fulano = JSON.parse('{"nombre":"Juan", "edad": 33, "casado: false}');
//convertis el string "juan, 33 años y casado" a formato JSON dentro de la variable fulano, para que obtenga su valor
//mediante el parse, abris parentesis, metes el JSON y lo convertis en objeto (fulano)


/*var coche = {
    modelo: "Ford Focus",
    anioFabricacion: "2020",
    mororizacion: 'Gasolina'
}*/
//var cadena = JSON.stringify(coche);
//convertis los datos de la variable (coche) a JSON

let productos = [
{
    "id":1,
    "nombre":"Conjunto Jess",
    "precio":199,
    "descripcion": "blablabla",
    "imagen": "https://estaticos-cdn.prensaiberica.es/clip/ffebd450-df2a-4655-982e-25dcc7a1c913_source-aspect-ratio_default_0.png",
    "cantidad": 5
},
{
    "id":2,
    "nombre":"Conjunto Marilyn",
    "precio":500,
    "descripcion": "globglobglob",
    "imagen": "https://laopinion.com/wp-content/uploads/sites/3/2021/09/conjunto_shutterstock_1920201881.jpg?quality=80&strip=all&w=1200",
    "cantidad": 3
},
{
    "id":2,
    "nombre":"Conjunto Andorra",
    "precio":900,
    "descripcion": "bleubleubla",
    "imagen": "https://www.michilenceria.com.ar/post/a4253-big.jpg",
    "cantidad": 14
}
]

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
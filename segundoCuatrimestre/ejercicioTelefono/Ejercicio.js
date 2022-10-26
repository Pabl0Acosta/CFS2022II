"use strict";
exports.__esModule = true;
var TelefonoConRadio_1 = require("./clases/TelefonoConRadio");
var TelefonoConCamara_1 = require("./clases/TelefonoConCamara");
//console.log(Telefono)
var telefonoViejo = new TelefonoConRadio_1["default"](106, true);
var telefonoNuevo = new TelefonoConCamara_1["default"](1256);
console.log(telefonoViejo);
telefonoViejo.desconectarInternet();
console.log(telefonoViejo);
telefonoNuevo.sacarFotos();

import Telefono from "./clases/Telefono";
import TelefonoConRadio from "./clases/TelefonoConRadio";
import TelefonoconCamara from "./clases/TelefonoConCamara"
import TelefonoConCamara from "./clases/TelefonoConCamara";

//console.log(Telefono)
let telefonoViejo : TelefonoConRadio = new TelefonoConRadio(106, true);
let telefonoNuevo : TelefonoConCamara = new TelefonoConCamara(1256);
console.log(telefonoViejo);
telefonoViejo.desconectarInternet();
console.log(telefonoViejo);
telefonoNuevo.sacarFotos();














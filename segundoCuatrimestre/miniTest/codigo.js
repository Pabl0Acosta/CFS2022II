var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log();
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, "Pocky") || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('meow meow');
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, "Pocko") || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('wuff wuff');
    };
    return Dog;
}(Animal));
var minino = new Cat();
console.log(minino);
minino.makeSound();
var firulais = new Dog();
console.log(firulais);
firulais.makeSound();
//Ejercicio 3:
//Utilizar lo aprendido y crear una Clase, la cual tenga metodos y atributos, una instancia de dicha clase, 
//y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.
var Piedra = /** @class */ (function () {
    function Piedra(tamaño) {
        this.tamaño = tamaño;
    }
    Piedra.prototype.getTamaño = function () {
        return this.tamaño;
    };
    return Piedra;
}());
var Marmol = /** @class */ (function (_super) {
    __extends(Marmol, _super);
    function Marmol() {
        return _super.call(this, 33) || this;
    }
    return Marmol;
}(Piedra));
var cascote = new Piedra(13);
console.log(cascote);
var payana = new Marmol();
console.log(payana);

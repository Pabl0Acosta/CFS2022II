class Animal {
    protected name: string;
    constructor(name: string) {
    this.name = name;
 }

    public makeSound(): void {
    console.log ();
 }
}

class Cat extends Animal{
    constructor() {
    super("Pocky");
}
public makeSound(): void {
    console.log('meow meow');
  }
}

class Dog extends Animal{
    constructor() {
    super("Pocko");
}
public makeSound(): void {
    console.log('wuff wuff');
  }
}

let minino: Cat = new Cat();
console.log(minino);
minino.makeSound();
let firulais: Dog = new Dog();
console.log(firulais);
firulais.makeSound();

//Ejercicio 3:
//Utilizar lo aprendido y crear una Clase, la cual tenga metodos y atributos, una instancia de dicha clase, 
//y por ultimo aplicar lo aprendido de Herencia y crear una clase que la herede.


class Piedra {
  private tamaño : number;
  
  constructor(tamaño: number){
    this.tamaño = tamaño;
  }
  public getTamaño(): number{
    return this.tamaño;
  }
}

class Marmol extends Piedra{
  constructor() {
    super(33);
  }
}

let cascote: Piedra = new Piedra(13)
console.log (cascote)
let payana: Marmol = new Marmol()
console.log (payana)


























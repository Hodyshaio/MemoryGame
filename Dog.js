import {Animal} from './Animal.js';

export class Dog extends Animal
{
    constructor(animal_name)
    {
      super(animal_name);
        this.animal_name = animal_name;
    }
  draw(DivElement){
       DivElement.innerHTML='<i class="fas fa-dog"></i>';
  }
}

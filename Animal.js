
export class Animal
{
    constructor(animal_name)
    {
        this.animal_name = animal_name;
    }
    draw(DivElement){
        return " ";
    }
    compare()
    {
      if(this.animal_name[0].children[1].innerHTML ==
         this.animal_name[1].children[1].innerHTML)
      {
        return true;
      }
      else
        return false;
    }
}
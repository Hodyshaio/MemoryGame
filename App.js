import {Bat} from './Bat.js';
import {Bird} from './Bird.js';
import {Cat} from './Cat.js';
import {Dog} from './Dog.js';
import {Duck} from './Duck.js';
import {Elephent} from './Elephent.js';
import {Horse} from './Horse.js';
import {Dragon} from './Dragon.js';
import { Animal } from './Animal.js';

let cards= document.getElementsByClassName('flp-card')

for(let i=0;i<cards.length;i++)
{
 cards[i].addEventListener('click',function(e){
     openCard(this);
     this.classList.toggle('flip');       
    },false)
}

const animalsArray = ['Dog' , 'Horse' , 'Cat' , 'Bird', 'Elephent' , 'Bat' , 'Dragon' ,
 'Duck'];

const animalsObjectArray = [new Dog("Dog") ,new Horse("Horse"), new Cat("Cat") ,
   new Bird("Bird") ,new Elephent("Elephent")  ,new Bat("Bat")  ,new Dragon("Dragon")  ,
   new Duck("Duck"),new Dog("Dog") ,new Horse("Horse"), new Cat("Cat") , 
   new Bird("Bird") ,new Elephent("Elephent")  ,new Bat("Bat")  ,
   new Dragon("Dragon")  ,new Duck("Duck") ] ;

function MixCards(animalsObjectArray) {
  var currentIndex = animalsObjectArray.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = animalsObjectArray[currentIndex];
    animalsObjectArray[currentIndex] = animalsObjectArray[randomIndex];
    animalsObjectArray[randomIndex] = temporaryValue;
  }
  console.log(animalsObjectArray)
  return animalsObjectArray;
} 

 let mixedCards = MixCards(animalsObjectArray);

 let cardElement = document.getElementsByClassName('back');
   for (var i= 0; i < mixedCards.length; i++){
     mixedCards[i].draw(cardElement[i]);
  }

  var openCards = [];

  function openCard(cardDiv)
  {
    openCards.push(cardDiv);
    if(openCards.length === 2)
    {
      let animal = new Animal(openCards);
      let result = animal.compare();
      if(result)
      {
        matchedOpen(openCards);
      }
      else
      {
        unmatchedClose(openCards);
      }
      openCards = [];
    }
  }

  let wins = 0;

  function matchedOpen(elem)
  {
    elem[0].classList.add('match');
    elem[1].classList.add('match');
    wins += 1;
    if(wins == 8)
    {
      alert("------ YOU WIN!!  ------");
    }
  }

  function unmatchedClose(elem)
  {
    var time = setTimeout(() => {
      elem[0].classList.toggle('flip');
      elem[1].classList.toggle('flip');
    }, 2000);
  }




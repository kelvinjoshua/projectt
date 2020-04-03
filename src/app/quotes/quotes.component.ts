import { Component, OnInit } from '@angular/core';
import { Properties } from '../properties';
  
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']      
}) 
export class QuotesComponent implements OnInit {
  property:Properties[]= [
    new Properties(` "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree."`,'~Martin luther',new Date(2020,4,1),0,0, ),
    new Properties(` "I have no special talent, I am only passionately curious."`, '~Albert Einstein',new Date(2020,4,1),0,0, ),
    new Properties(` "That which does not kill us makes us stronger."`, `~Friedrich Nietzsche` ,new Date(2020,6,1),0,0, ),
    new Properties(` "If you think you can do a thing or think you can’t do a thing, you’re right."`, `Henry Ford`,new Date(2020,7,1),0,0,),
    new Properties(` "Genius is eternal patience"`, `~MichelAngelo`,new Date(2020,4,1),0,0, ),
    new Properties(` "Better to die standing than to live on your knees."`, `~Ernesto “Che” Guevara`,new Date(2020,9,1),0,0, ),
    new Properties(` "I’ve failed over and over and over again in my life and that is why I succeed."`, `~Michael Jordan`,new Date(2020,4,1),0,0, ),
    new Properties(`"It’s not how much you have that makes people look up to you, it’s who you are."`, `~Elvis Presely`,new Date(2020,4,1),0,0, ),
    new Properties(` "Well done is better than well said."`, `~Benjamin Franklin`,new Date(2020,4,1),0,0, ),
    new Properties(`"The future belongs to those who prepare for it today."`,`Anonymous`,new Date(2020,4,1),0,0, ),
    new Properties(`"The most courageous act is still to think for yourself. Aloud."`,`~Coco Chanel`,new Date(2020,4,1),0,0, )
   //keyword new used to call the blueprint showing mandatory properties//
  ]; 
  addNewQuote(property){
    let propertylength= this.property.length;//get length of the property array and store it in a var//
    property.id = propertylength +1;
    this.property.push(property) //push new property in the property array//
  }

  toggleauthor(index){
    this.property[index].showauthor = !this.property[index].showauthor;
    //call the property property and loop through the index array and show author for each index item//
  }
  deleteQuote(done,index){
    if(done){
      this.property.splice(index,1);//call the property array and remove the element this case quote st thst psrticulsr index//
    }

  }
    perfomCount(count,index){//
    if(count){//
      this.property[index].vote= this.property[index].vote +=1
      
      }
    }
    perfomUnlike(unlike,index){
      if(unlike){
        this.property[index].downvote= this.property[index].downvote +=1

      }
    }
 

  constructor() { }

  ngOnInit(){
  }

}

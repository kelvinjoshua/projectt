import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Properties } from '../properties';
@Component({

  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newProperty = new Properties('message','author',new Date(),'vote','downvote');//DECLARED NEW property and assigned it to our blueprint class and passed its attributes as arguments//
  @Output () addQuote = new EventEmitter<Properties>();

    submitQuote(){
      this.addQuote.emit(this.newProperty);// we use the emit method and pass in the new goal object we want to create//

    }
  constructor() { }

  ngOnInit(){
  }

}
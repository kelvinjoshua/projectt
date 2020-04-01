import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Properties } from '../properties';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input () property:Properties;
  @Output () done = new EventEmitter<boolean>();

 

  quoteDelete(complete:boolean){
    this.done.emit(complete);//event emmitted captured on the parent//
  }


  constructor() { }

  ngOnInit(): void {
  }

}

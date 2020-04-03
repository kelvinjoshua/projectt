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
  @Output () count = new EventEmitter<number>();
  @Output  () unlike = new EventEmitter <number>();
 

  quoteDelete(complete:boolean){
    this.done.emit(complete);//event emmitted captured on the parent//
  }
  counting(increase:number){
    this.count.emit(increase +1);
  }
  depreciate(decrease:number){
    this.unlike.emit(decrease +1);

  }

  constructor() { }

  ngOnInit(): void {
  }

}

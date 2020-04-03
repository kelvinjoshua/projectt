import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]' //makes it anattribute directive//
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.textDecorationColor='red';
  }

}

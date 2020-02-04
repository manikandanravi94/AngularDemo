import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
directives can be applied on events and pipes are not like that.. it vl b applied instantly to the value
*/

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  text:string;

  constructor(private el: ElementRef ) {}

  @HostListener('focus') onFocus(){
     console.log(focus);
  }

  @Input('appInputformat') pattern:string;

  @HostListener('blur') onBlur(){
    console.log(blur);
    this.text=this.el.nativeElement.value;
    if(this.pattern=="upperCase")
    {
      this.el.nativeElement.value=this.text.toUpperCase();
    }
  }

}

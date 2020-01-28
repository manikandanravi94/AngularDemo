import { Directive, ElementRef, HostListener, Input } from '@angular/core';

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

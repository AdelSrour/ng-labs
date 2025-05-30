import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appEmailvalidator]'
})
export class EmailvalidatorDirective {

  constructor() { }
  @Output() validEmail = new EventEmitter<string>();
  @Output() invalidEmail = new EventEmitter<string>();

  @HostListener('input', ['$event']) onInputChange(e:Event) {
    this.delayedSearch(e);
  }


  timeout = setTimeout(() => { }, 0);

  //Search after few ms to prevent spam
  delayedSearch(e: Event) {
    clearInterval(this.timeout);
    this.timeout = setTimeout(() => {
      const value = (e.target as HTMLInputElement).value;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(value)) {
        this.validEmail.emit(value);
        this.invalidEmail.emit("");
      } else {
        this.invalidEmail.emit(value);
        this.validEmail.emit("");
      }
    }, 250);
  }
  
}


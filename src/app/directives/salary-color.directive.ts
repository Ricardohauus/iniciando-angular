import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.innerHTML = 'Teste'
  }

}

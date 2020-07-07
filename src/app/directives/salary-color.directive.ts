import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  @Input()
  public salaryColor;

  constructor(private element: ElementRef) {
    setTimeout(() => {
      let nativeElement = this.element.nativeElement;
      nativeElement.style.color = parseFloat(this.salaryColor) > 2000 ? 'green' : 'red';
    }, 2000)

  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee.service';
declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  constructor(private element: ElementRef, private service: EmployeeService) { }

  ngOnInit(): void {
  }

  public show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }
  public hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }

  public adicionar(): void {
    const copy = Object.assign({}, this.employee)
    this.service.addEmployee(copy)
    this.hide();
  }

}

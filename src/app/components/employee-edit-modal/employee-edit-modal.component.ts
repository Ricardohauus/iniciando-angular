import { Component, OnInit, EventEmitter, ElementRef, Output, Input } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee.service';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: Employee;

  constructor(private element: ElementRef) { }

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
    const copy = Object.assign({}, this.employee);
    //this.service.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();


}

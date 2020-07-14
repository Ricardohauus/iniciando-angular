import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee.service';
import { ModalComponent } from '../modal/modal.component';

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

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  @ViewChild(ModalComponent)
  modalComponent: ModalComponent;

  constructor(private element: ElementRef, private service: EmployeeService) { }

  ngOnInit(): void {
  }

  public show() {
    this.modalComponent.show();
  }
  public hide() {
    this.modalComponent.hide();
  }

  public adicionar(): void {
    const copy = Object.assign({}, this.employee);
    this.service.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

}

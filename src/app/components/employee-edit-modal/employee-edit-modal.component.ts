import { Component, OnInit, EventEmitter, ElementRef, Output, Input, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @ViewChild(ModalComponent)
  modalComponent: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }
  public show() {
    console.log(this.modalComponent);
    this.modalComponent.show();
  }
  public hide() {
    this.modalComponent.hide();
  }

  public editar(): void {
    const copy = Object.assign({}, this.employee);
    //this.service.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();


}

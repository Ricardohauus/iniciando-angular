import { Component, OnInit, EventEmitter, ElementRef, Output, Input, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();
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

  public destroy(): void {
    const copy = Object.assign({}, this.employee);
    this.service.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
    this.hide();
  }



}

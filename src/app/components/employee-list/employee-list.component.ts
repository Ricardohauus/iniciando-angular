import { Component, OnInit, ViewChild } from '@angular/core';

import { EmployeeService, Employee } from '../../services/employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  showMessageSuccess = false;
  employee: Employee;
  employeeToEdit: Employee;
  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModal: EmployeeEditModalComponent;

  constructor(private service: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.service.employees;
  }
  public employees = [];

  openNewModal() {
    this.employeeNewModal.show();
  }

  openEditModal(employee: Employee) {
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }
  onNewEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
    setTimeout(() => {
      this.showMessageSuccess = false;
    }, 5000);
  }
  onEditEmployee(employee: Employee) {
    console.log(employee);

  }
}

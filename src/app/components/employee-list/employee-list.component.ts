import { Component, OnInit, ViewChild } from '@angular/core';

import { EmployeeService, Employee } from '../../services/employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  showMessageSuccess = false;
  employee: Employee;
  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;

  constructor(private service: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this.service.employees;
  }
  public employees = [];
  openNewModal() {
    this.employeeNewModal.show();
  }
  onNewEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
  }
}

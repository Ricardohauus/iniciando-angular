import { Component, OnInit, ViewChild } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;

  constructor(private service: EmployeeService) {

    // setTimeout(() => {
    //   this.employeeNewModal.show();
    // }, 2000)
  }

  ngOnInit(): void {
    this.employees = this.service.employees;
  }
  public employees = [];
  openNewModal() {
    this.employeeNewModal.show();
  }
  public getSalaryColor(salary: number): string {
    return salary > 20000 ? 'green' : 'black ';
  }
}

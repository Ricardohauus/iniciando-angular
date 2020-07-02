import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.service.employees;
  }
  public employees = [];

  public getSalaryColor(salary: number): string {
    return salary > 20000 ? 'green' : 'black ';
  }
}

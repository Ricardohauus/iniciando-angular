import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  }


  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
  }

  public adicionar(): void {
    const copy = Object.assign({}, this.employee)
    this.service.addEmployee(copy)

  }


}

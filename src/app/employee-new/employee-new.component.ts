import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public name: string = 'Luiz Carlos'

}

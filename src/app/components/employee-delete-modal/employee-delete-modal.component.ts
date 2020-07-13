import { Component, OnInit, EventEmitter, ElementRef, Output, Input } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee.service';
declare const $;

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

  constructor(private element: ElementRef, private service: EmployeeService) { }

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
    return nativeElement.firstChild as HTMLElement;
  }

  public destroy(): void {
    const copy = Object.assign({}, this.employee);
    this.service.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
    this.hide();
  }



}

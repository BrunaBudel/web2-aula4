import { Component } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  funcionarios: Funcionario[] = [];

  constructor(private employeeService: EmployeeService) {
    this.funcionarios = this.employeeService.getFuncionarios();
  }
}

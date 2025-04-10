import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private funcionarios: Funcionario[] = [];

  adicionarFuncionario(funcionario: Funcionario) {
    this.funcionarios.push(funcionario);
  }

  getFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }
}

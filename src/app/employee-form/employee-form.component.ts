import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Funcionario } from '../models/funcionario';
import { Desenvolvedor, Gerente } from '../models/classes-concretas';

@Component({
  selector: 'app-employee-form',
  standalone: false,
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  tipoSelecionado: string = '';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      tipo: ['', Validators.required],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(18)]],
      salarioBase: ['', [Validators.required, Validators.min(1300)]],
      linguagem: [''],
      subordinados: [''],
    });
  }

  onTipoChange() {
    this.tipoSelecionado = this.employeeForm.get('tipo')?.value;
  }

  onSubmit() {
    const formData = this.employeeForm.value;
    let novoFuncionario: Funcionario;

    if (formData.tipo === 'desenvolvedor') {
      novoFuncionario = new Desenvolvedor(
        formData.nome,
        formData.idade,
        formData.salarioBase,
        formData.linguagem
      );
    } else {
      novoFuncionario = new Gerente(
        formData.nome,
        formData.idade,
        formData.salarioBase,
        formData.subordinados
      );
    }

    this.employeeService.adicionarFuncionario(novoFuncionario);
    this.employeeForm.reset();
  }
}

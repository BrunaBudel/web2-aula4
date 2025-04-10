import { Funcionario } from './funcionario';

export class Desenvolvedor extends Funcionario {
  constructor(
    nome: string,
    idade: number,
    salarioBase: number,
    private linguagem: string
  ) {
    super(nome, idade, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase * 1.2; // Bônus de 20%
  }
}

export class Gerente extends Funcionario {
  constructor(
    nome: string,
    idade: number,
    salarioBase: number,
    private subordinados: number
  ) {
    super(nome, idade, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.subordinados * 100; // R$100 por subordinado
  }
}

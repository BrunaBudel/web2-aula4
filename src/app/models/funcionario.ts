import { IPessoa } from './ipessoa';

export abstract class Funcionario implements IPessoa {
  private static nextId: number = 1;
  readonly id: number;

  constructor(
    private _nome: string,
    private _idade: number,
    protected salarioBase: number
  ) {
    this.id = Funcionario.nextId++;
  }

  // Getters/Setters
  get nome(): string {
    return this._nome;
  }
  set nome(novoNome: string) {
    this._nome = novoNome.trim();
  }

  get idade(): number {
    return this._idade;
  }
  set idade(novaIdade: number) {
    if (novaIdade >= 18) this._idade = novaIdade;
  }

  abstract calcularSalario(): number;
}

export class Endereco{
    logradouro : string;
    numero : string;
    complemento : string;
    cidade : string;
    estado : string;
    cep : string;
}

export class Responsavel{
    id : number;
    nome : string;
    grauParentesco : string;
    celular : string;

    constructor(id? : number, nome? : string, grauParentesco? : string, celular? : string){
        this.id = id;
        this.nome = nome;
        this.grauParentesco = grauParentesco;
        this.celular = celular;
    }

}

export class Telefone{
    id: number;
    tipo : string;
    numero : string;

    constructor(id? : number, tipo? : string, numero? : string){
        this.id = id;
        this.tipo = tipo;
        this.numero = numero;
    }
}

export class Paciente{
    id : number;
    nome : string;
    email : string;
    cpf : string;
    rg : string;
    //telefone : string;
    //celular : string;
    endereco = new Endereco();
    telefones = new Array<Telefone>();
    responsaveis = new Array<Responsavel>();
}
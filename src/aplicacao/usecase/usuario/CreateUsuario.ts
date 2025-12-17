import { Usuario } from "../../../dominio/entidades/Usuario";
import { UsuarioRepositorio } from "../../../dominio/repositorios/UsuarioRepositorio";
import { UsuarioRepositorioMySql } from "../../../infra/bd/mysql/UsuarioRepositorioMySql";
import { UsuarioRepositorioPg } from "../../../infra/bd/pg/UsuarioRepositorioPg";

export class CreateUsuario {
    public constructor(private readonly usuarioRepositorio: UsuarioRepositorio) {}
    public async salvar(id: string, nome: string): Promise<void> {
        const usuario = Usuario.criar(id, nome);
        await this.usuarioRepositorio.salvar(usuario);
    }
}

export class Container {
    public static getCreateUsuario(): CreateUsuario {
        return new CreateUsuario(Container.getCreateUsuarioMySql());
    }

    public static getCreateUsuarioMySql(): UsuarioRepositorioMySql {
        return new UsuarioRepositorioMySql();
    }
}

const useCaseUsuario = new CreateUsuario(new UsuarioRepositorioPg());
useCaseUsuario.salvar("1", "João da Silva");

const useCaseCU2 = Container.getCreateUsuario();
useCaseCU2.salvar("2", "Maria Oliveira");
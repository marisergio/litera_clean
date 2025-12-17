import { Usuario } from "../../../dominio/entidades/Usuario";
import { UsuarioRepositorio } from "../../../dominio/repositorios/UsuarioRepositorio";

export class UsuarioRepositorioPg implements UsuarioRepositorio {
    public async salvar(usuario: Usuario): Promise<void> {
        // Lógica para salvar o usuário no banco de dados PostgreSQL
    }
    public async buscarPorId(id: string): Promise<Usuario | null> {
        // Lógica para buscar o usuário no banco de dados PostgreSQL
        return null;
    }
    public async deletar(id: string): Promise<void> {
        // Lógica para deletar o usuário do banco de dados PostgreSQL
    }
    public async atualizar(usuario: Usuario): Promise<void> {
        // Lógica para atualizar o usuário no banco de dados PostgreSQL
    }
}
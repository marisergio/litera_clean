import { Usuario } from "../entidades/Usuario"

export interface UsuarioRepositorio {
    salvar(usuario: Usuario): Promise<void> 
    buscarPorId(id: string): Promise<Usuario | null> 
    deletar(id: string): Promise<void> 
    atualizar(usuario: Usuario): Promise<void> 
} 
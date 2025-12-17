export class Usuario {
    
    private constructor(
        private readonly id: string, 
        private readonly nome: string) {
    }

    public static criar(id: string, nome: string): Usuario {
        return new Usuario(id, nome);
    }
}
export type LivroProps = {
    id: string;
    titulo: string;
    autor: string;
    editora: string;
    ano: number;
    isEmprestado: boolean;
}

export class Livro {

    private constructor(
        private props: LivroProps
    ) {
    }

    public static create(titulo: string, autor: string, editora: string, ano: number): Livro {

        if (!titulo || !ano) {
            throw new Error('Título e ano são obrigatórios')
        }

        return new Livro({ id: crypto.randomUUID().toString(), titulo, autor, editora, ano, isEmprestado: false });
    }

    public emprestar(): void {
        if (this.props.isEmprestado) {
            throw new Error('Livro já emprestado')
        }
        this.props.isEmprestado = true;
    }

    public devolver(): void {
        if (!this.props.isEmprestado) {
            throw new Error('Livro não está emprestado')
        }
        this.props.isEmprestado = false;
    }


    public static fromPersistence(props: LivroProps): Livro {
        return new Livro(props);
    }

    public toPersistence(): LivroProps {
        return this.props;
    }

    public get id() {
        return this.props.id;
    }

    public get titulo() {
        return this.props.titulo;
    }

    public get autor() {
        return this.props.autor;
    }

    public get editora() {
        return this.props.editora;
    }

    public get ano() {
        return this.props.ano;
    }

    public get isEmprestado() {
        return this.props.isEmprestado;
    }

    public alterarTitulo(novoTitulo: string): void {
        if (!novoTitulo.trim()) throw new Error('Título inválido');
        this.props.titulo = novoTitulo;
    }


}
export type ListLivroInputDTO = void;
export type ListLivroOutputDTO = {
    livros: {
        id: string;
        titulo: string;
        autor: string;
        isEmprestado: boolean;
    }[]
};
import { useQuery } from "@apollo/client"
import { ICategoria } from "../../interfaces/ICategoria"
import { ILivro } from "../../interfaces/ILivro"
import { OBTER_LIVROS } from "./queries"
import { livrosVar } from "./state"

export const useLivros = (categoria: ICategoria) => {
    return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        },
        onCompleted(data) {
            if (data.livros) {
                livrosVar(data.livros)
            }
        },
    })
}
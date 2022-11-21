import { gql, useQuery } from "@apollo/client"
import { ICategoria } from "../../interfaces/ICategoria"
import { ILivro } from "../../interfaces/ILivro"
import CardLivro from "../CardLivro"

import './ListaLivros.css'

interface ListaLivrosProps {
    categoria: ICategoria
}

const OBTER_LIVROS = gql`
  query ObterLivros {
    livros {
      id
      slug
      titulo
      imagemCapa
      opcoesCompra {
        id
        preco
      }
    }
  }
`

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

    const { data } = useQuery<{ livros: ILivro[]}>(OBTER_LIVROS)

    // const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))
    return <section className="livros">
        {data?.livros.map(livro => <CardLivro livro={livro} key={livro.id} />)}
    </section>
}

export default ListaLivros
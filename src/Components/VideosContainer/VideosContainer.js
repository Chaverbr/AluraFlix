import React from 'react';
import Categoria from '../Categoria/Categoria.js';
import categorias from "../Json/Categorias.json";

const VideosContainer = () => {

      const categoriasOBJ = categorias.categorias;

      return (
            <>
                  {categoriasOBJ.map(categoria => {
                        const cardsFiltrados = categoria.cards.filter(
                              elemento => elemento.nome === categoria.nome
                        );

                        return (
                              <Categoria
                                    key={categoria.key}
                                    nome={categoria.nome}
                                    cor={categoria.cor}
                                    descricao={categoria.descricao}
                                    cards={cardsFiltrados}
                              />
                        );
                  })}
            </>
      )
}

export default VideosContainer;
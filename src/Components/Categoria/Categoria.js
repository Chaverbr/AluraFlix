import React from 'react';
import styled from 'styled-components';
import { grayLight } from '../UI/Variaveis';
import Cards from '../Cards/Cards.js';

const StyledCategoria = styled.section`
      width: 100%;
      height: 400px;
`

const CategoriaTitulo = styled.h2`
      background-color: ${props => props.cor};
      font-size: 32px;
      display: inline-block;
      color: ${grayLight};
      padding: 12px;
`

const CategoriaSubtitulo = styled.h3`
      font-size: 14px;
      font-weight: 300;
`

const CategoriaTextos = styled.div`
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 8px 32px;
`

const CategoriaCards = styled.div`
      padding: 16px 32px;
      display: flex;
      align-items: center;
      gap: 12px;
`

const Categoria = ({ nome, cor, descricao, cards }) => {

      return (
            <StyledCategoria>

                  <CategoriaTextos>
                        <CategoriaTitulo cor={cor}>{nome}</CategoriaTitulo>
                        <CategoriaSubtitulo>{descricao}</CategoriaSubtitulo>
                  </CategoriaTextos>

                  <CategoriaCards>
                        {
                              cards.map(item => {
                                    item.cards.map(elemento => {
                                          <Cards
                                                key={elemento.key}
                                                titulo={elemento.titulo}
                                                link={elemento.link}
                                                imagem={elemento.imagem} 
                                          />
                                    })
                              })

                        }
                  </CategoriaCards>

            </StyledCategoria>
      );
}

export default Categoria;
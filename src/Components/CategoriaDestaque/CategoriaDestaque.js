import React from 'react';

import Cards from '../Cards/Cards.js';
import styled from 'styled-components';



const StyledCategoriaDestaque = styled.div`
      position: relative;
      width: 100%;
      height: 200px;
`
const CategoriaDestaqueCards = styled.div`
      position: absolute;
      top: -144px;
      padding: 16px 32px;
      display: flex;
      align-items: center;
      gap: 12px;
`



const CategoriaDestaque = ({ cardsLista }) => {

      return (
            <StyledCategoriaDestaque>

                  <CategoriaDestaqueCards>
                        {
                              cardsLista.map(objeto => {
                                    return (<Cards
                                          key={objeto.key}
                                          titulo={objeto.titulo}
                                          link={objeto.link}
                                          imagem={objeto.imagem}
                                          cor={objeto.cor}
                                    />);
                              })
                        }
                  </CategoriaDestaqueCards>

            </StyledCategoriaDestaque>
      );
}

export default CategoriaDestaque;
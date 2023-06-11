import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.img`
      width: 440px;
      height: 265px;
      border: 3px solid ${props => props.cor};
      transition: all 500ms ease-in-out;

      &:hover {
            cursor: pointer;
            transform: scale(107%);
      }
`

const Cards = ({ titulo, link, imagem, cor }) => {

      return (
            <StyledCard
                  src={imagem}
                  alt={titulo}
                  onClick={() => {
                        window.location.href = `${link}`;
                  }}
                  cor={cor}
            />
      );
}

export default Cards;
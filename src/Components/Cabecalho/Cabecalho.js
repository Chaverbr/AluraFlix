import React from 'react';
import styled from "styled-components";
import logoAlura from "../../img/Logos/logo_aluraflix.png";
import { blackDark, grayLight } from '../UI/Variaveis';

const StyledCabecalho = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 94px;
      background-color: ${blackDark};
      padding: 0px 24px;
`
const LogoAluraFlix = styled.img`
      width: 150px;
      height: 40px;
`

const BlackButton = styled.button`
      font-family: 'Source Sans Pro';
      font-size: 16px;
      height: 40px;
      width: 150px;
      color: ${grayLight};
      background-color: ${blackDark};
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid ${grayLight}
`

const Cabecalho = () => {
      return (
            <StyledCabecalho>
                  <LogoAluraFlix src={logoAlura} alt="Logo AluraFlix" />

                  <BlackButton>
                        Novo Vídeo
                  </BlackButton>

            </StyledCabecalho>
      )
}

export default Cabecalho;
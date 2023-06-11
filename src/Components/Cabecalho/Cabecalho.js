import React from 'react';
import styled from "styled-components";
import logoAlura from "../../img/Logos/logo_aluraflix.png";
import { blackDark, grayLight, primaryMedium } from '../UI/Variaveis';
import { Link } from "react-router-dom";

const StyledCabecalho = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 94px;
      background-color: ${blackDark};
      padding: 0px 24px;
      border-bottom: 3px solid ${primaryMedium};
`
export const LogoAluraFlix = styled.img`
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

                  <Link to="/">
                        <LogoAluraFlix src={logoAlura} alt="Logo AluraFlix" />
                  </Link>

                  <Link to="/novovideo">
                        <BlackButton>
                              Novo Vídeo
                        </BlackButton>
                  </Link>

            </StyledCabecalho>
      )
}

export default Cabecalho;
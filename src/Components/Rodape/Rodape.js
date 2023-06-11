import React from 'react';
import styled from "styled-components";
import logoAlura from "../../img/Logos/logo_aluraflix.png";
import { blackDark, primaryMedium } from "../UI/Variaveis.js";
import { LogoAluraFlix } from "../Cabecalho/Cabecalho.js";

const StyledRodape = styled.footer`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 94px;
      border-top: 3px solid ${primaryMedium};
`

const Rodape = () => {
      return (
            <>
                  <StyledRodape>
                        <LogoAluraFlix src={logoAlura} alt="Logo da AluraFlix" />
                  </StyledRodape>
            </>
      )
}

export default Rodape;
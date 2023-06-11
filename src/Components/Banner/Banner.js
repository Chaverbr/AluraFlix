import React from 'react';
import styled from "styled-components";
import imagemDeFundo from "../../img/Imagens/banner.png";
import { grayLight, frontEndColor } from '../UI/Variaveis';

import categorias from "../../Json/Categorias.json";

const StyledBanner = styled.div`
      background-image: url(${imagemDeFundo});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 800px;
      width: 100%;
`

const FiltroEscuro = styled.div`
      background-color: rgba(0, 0, 0, 0.59);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
`

const BannerTextos = styled.div`
      width: 42%;
      height: 40%;
`

const BannerImagemApresentacao = styled.img`
      width: 34%;
      height: 40%;
`

const TextoCategoriaDestaque = styled.h1`
      font-size: 60px;
      display: inline-block;
      color: ${grayLight};
      background-color: ${frontEndColor};
      padding: 12px;
`

const BannerTitulo = styled.h2`
      font-size: 40px;
      font-weight: 400;
      margin: 32px 0px 12px 0px;
      color: ${grayLight};
`

const BannerSubtitulo = styled.h3`
      font-size: 18px;
      font-weight: 300;
      color: ${grayLight};
      line-height: 21px;
`

const Banner = () => {

      const categoriaDestaqueNome = categorias.destaques.filter(objeto => {
            if (objeto.destaque === true) {
                  return objeto
            }
      })

      return (
            <StyledBanner>
                  <FiltroEscuro>
                        <BannerTextos>
                              <TextoCategoriaDestaque>{categoriaDestaqueNome[0].nome}</TextoCategoriaDestaque>

                              <BannerTitulo>SEO com React</BannerTitulo>

                              <BannerSubtitulo>Esse desafio é uma forma de aprendizado.
                                    É um mecanismo onde você pode se engajar na resolução de um problema para poder aplicar todo o conhecimento adquirido na Formação React.
                              </BannerSubtitulo>
                        </BannerTextos>

                        <BannerImagemApresentacao src={imagemDeFundo} alt="Foto de Apresentação" />
                  </FiltroEscuro>
            </StyledBanner>
      )
}

export default Banner;
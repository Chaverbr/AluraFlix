import React, { useState } from 'react';
import { styled } from 'styled-components';
import { blackLighter, blackDark, primaryMedium, grayLight } from '../../Components/UI/Variaveis';

//ESTILOS
const NovoVideoTitulo = styled.h1`
      font-size: 40px;
      text-align: center;
      margin: 24px 0px;
      font-weight: 300;
`

const InputTexto = styled.input`
      background-color: ${blackLighter};
      color: ${blackDark};
      border: none;
      border-radius: 6px;
      padding: 4px 16px;
      height: 50px;
      width: 100%;
      font-size: 19px;
      font-weight: 400;
      margin-bottom: 20px;

      &:hover {
            border-bottom: 4px solid ${primaryMedium};
      }

      &::placeholder {
            font-size: 15px;
            font-weight: 300;
            color: ${blackDark};
      }
`

const InputCaixaDetexto = styled.textarea`
      height: 96px;
      border-radius: 1px;
      background-color: ${blackLighter};
      color: ${blackDark};
      border: none;
      padding: 4px 16px;
      width: 100%;
      font-size: 19px;
      font-weight: 400;
      margin-bottom: 20px;

      &::placeholder {
            font-size: 15px;
            font-weight: 300;
            color: ${blackDark};
      }

      &:hover {
            border-bottom: 4px solid ${primaryMedium};
      }
`

const StyledContainer = styled.main`
      width: 100%;
      height: max-content;
      padding: 32px 56px 96px 56px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
`

const BotoesContainer = styled.div`
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
`

const Botao = styled.button`
      width: 120px;
      height: 45px;
      background-color: ${primaryMedium};
      color: ${grayLight};
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
`

const BotaoCinza = styled(Botao)`
      background-color: ${blackLighter};
      color: ${blackDark};
      margin-left: 24px;
`


const NovoVideo = () => {

      const [titulo, setTitulo] = useState("");
      const [linkVideo, setLinkVideo] = useState("");
      const [linkImagem, setLinkImagem] = useState("");
      const [descricao, setDescricao] = useState("");
      const [codigoSeguranca, setCodigoSeguranca] = useState("");

      const [dados, setDados] = useState([
            {
                  titulo,
                  linkVideo,
                  linkImagem,
                  descricao,
                  codigoSeguranca
            }
      ]);

      return (
            <StyledContainer>

                  <NovoVideoTitulo> Novo Vídeo </NovoVideoTitulo>

                  <InputTexto
                        value={titulo}
                        type='text'
                        placeholder='Título'
                        required
                        onChange={(event) => {
                              setTitulo(event.target.value);
                        }}
                        onBlur={(event) => {
                              novoVideo.titulo = event.target.value;
                        }}
                  />

                  <InputTexto
                        value={linkVideo}
                        type='text'
                        placeholder='Link do Vídeo'
                        required
                        onChange={(event) => {
                              setLinkVideo(event.target.value);
                        }}
                        onBlur={(event) => {
                              novoVideo.linkVideo = event.target.value;
                        }}
                  />

                  <InputTexto
                        value={linkImagem}
                        type='text'
                        placeholder='Link da Imagem do Vídeo'
                        required
                        onChange={(event) => {
                              setLinkImagem(event.target.value);
                        }}
                        onBlur={(event) => {
                              novoVideo.linkImagem = event.target.value;
                        }}
                  />

                  <InputCaixaDetexto
                        value={descricao}
                        type="text"
                        placeholder="Descrição"
                        required
                        onChange={(event) => {
                              setDescricao(event.target.value);
                        }}
                        onBlur={(event) => {
                              novoVideo.descricao = event.target.value;
                        }}
                  />

                  <InputTexto
                        value={codigoSeguranca}
                        type='text'
                        placeholder="Código de Segurança"
                        required
                        onChange={(event) => {
                              setCodigoSeguranca(event.target.value);
                        }}
                        onBlur={(event) => {
                              novoVideo.codigoSeguranca = event.target.value;
                        }}
                  />

                  <BotoesContainer>

                        <div>

                              <Botao
                                    onClick={mostrar}
                              >
                                    Salvar
                              </Botao>

                              <BotaoCinza>
                                    Limpar
                              </BotaoCinza>

                        </div>

                        <Botao>
                              Nova Categoria
                        </Botao>

                  </BotoesContainer>

            </StyledContainer>
      );
}


export default NovoVideo;
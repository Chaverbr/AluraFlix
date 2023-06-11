import React from 'react';
import Categoria from '../Categoria/Categoria.js';
import CategoriaDestaque from '../CategoriaDestaque/CategoriaDestaque.js';

// CARDS FRONT-END
import oqeReactCard from "../../img/Imagens/oqeReact_frontend.jpg";
import aprendaReactHookCard from "../../img/Imagens/aprendaReactHook_frontend.jpg";
import guiaDeCarreiraCard from "../../img/Imagens/guiaDeCarreira_frontend.jpg";
import layoutResponsivoCard from "../../img/Imagens/layoutResponsivo_frontend.jpg";

// CARDS DATA-SCIENCE
import intArtificialCard from "../../img/Imagens/intArtificial_datascience.jpg";
import oqeDataScienceCard from "../../img/Imagens/oqeDataScience_datascience.jpg";
import machiLearningCard from "../../img/Imagens/machiLearning_datascience.jpg";
import aprendaTudoDSCard from "../../img/Imagens/aprendaTudoDS_datascience.jpg";

// CARDS MOBILE
import devIOSCard from "../../img/Imagens/devIOS_mobile.jpg";
import temasSwiftuiCard from "../../img/Imagens/temasSwiftui_mobile.jpg";
import jetpackComposeCard from "../../img/Imagens/jetpackCompose_mobile.jpg";
import desenAndroidCard from "../../img/Imagens/desenAndroid_mobile.jpg";
import { dataScienceColor, frontEndColor, mobileColor } from '../UI/Variaveis.js';

const VideosContainer = () => {

      
      const categorias = [
            {
                  key: 1,
                  nome: "frontEnd",
                  cor: "#6BD1FF",
                  descricao: "Formação Front-End da Alura",
                  destaque: true,
                  cards: [
                        {
                              titulo: "O que é React JS?",
                              link: "https://youtu.be/6IuQUgeDPg0",
                              imagem: oqeReactCard,
                              cor: frontEndColor,
                              key: 1
                        },
                        {
                              titulo: "Aprenda React Hook neste tutorial",
                              link: "https://youtu.be/KdQa4Rd6K1A",
                              imagem: aprendaReactHookCard,
                              cor: frontEndColor,
                              key: 2
                        },
                        {
                              titulo: "Guia de carreira React JS",
                              link: "https://youtu.be/0tS4lUq_7iA",
                              imagem: guiaDeCarreiraCard,
                              cor: frontEndColor,
                              key: 3
                        },
                        {
                              titulo: "Como deixar o Layout Responsivo no seu site",
                              link: "https://youtu.be/kyFiT4ofMwk",
                              imagem: layoutResponsivoCard,
                              cor: frontEndColor,
                              key: 4
                        }
                  ]
            },
            {
                  key: 2,
                  nome: "data-science",
                  cor: "#69953B",
                  descricao: "Formação Data Science na Alura",
                  destaque: false,
                  cards: [
                        {
                              titulo: "Será que a inteligência artificial será tão poderosa quanto os seres humanos?",
                              link: "https://youtu.be/Kk3vBRqKA2o",
                              imagem: intArtificialCard,
                              cor: dataScienceColor,
                              key: 1
                        },
                        {
                              titulo: "O que é Data Science?",
                              link: "https://youtu.be/5b9Z8toVaAU",
                              imagem: oqeDataScienceCard,
                              cor: dataScienceColor,
                              key: 2
                        },
                        {
                              titulo: "3 aplicações de Machine Learning onde você nem imagina",
                              link: "https://youtu.be/qYhixp5qxTc",
                              imagem: machiLearningCard,
                              cor: dataScienceColor,
                              key: 3
                        },
                        {
                              titulo: "Aprenda tudo sobre Data Science, seus primeiros passos",
                              link: "https://youtu.be/IQdISZCosAE",
                              imagem: aprendaTudoDSCard,
                              cor: dataScienceColor,
                              key: 4
                        }
                  ]
            },
            {
                  key: 3,
                  nome: "mobile",
                  cor: "#FFBA05",
                  descricao: "Formação Mobile da Alura",
                  destaque: false,
                  cards: [
                        {
                              titulo: "Desenvolvimento iOS com Giovanna Moeller",
                              link: "https://youtu.be/4AH9H_dx_7g",
                              imagem: devIOSCard,
                              cor: mobileColor,
                              key: 1
                        },
                        {
                              titulo: "Temas e Cores no SwiftUI",
                              link: "https://youtu.be/uXA8jLSuPNA",
                              imagem: temasSwiftuiCard,
                              cor: mobileColor,
                              key: 2
                        },
                        {
                              titulo: "De Views para Jetpack Compose",
                              link: "https://youtu.be/ly8e6WB0YQo",
                              imagem: jetpackComposeCard,
                              cor: mobileColor,
                              key: 3
                        },
                        {
                              titulo: "Desenvolvimento Android",
                              link: "https://youtu.be/fWscDFHKgw8",
                              imagem: desenAndroidCard,
                              cor: mobileColor,
                              key: 4
                        }
                  ]
            }
      ]

      return (
            <>
                  {
                        categorias.map(objeto => {
                              if (objeto.destaque === true) {

                                    return (<CategoriaDestaque
                                          key={objeto.key}
                                          cardsLista={objeto.cards}
                                    />);

                              } else {

                                    return (<Categoria
                                          key={objeto.key}
                                          nome={objeto.nome}
                                          cor={objeto.cor}
                                          descricao={objeto.descricao}
                                          cardsLista={objeto.cards}
                                    />);
                                    
                              }
                        })
                  }
            </>
      )
}

export default VideosContainer;
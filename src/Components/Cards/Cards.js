import React from 'react';

const Cards = ({ titulo, link, imagem }) => {

      console.log(titulo);
      console.log(link);

      console.log("funcioanndo");

      return (
            <img
                  src={imagem}
                  alt={titulo}
                  onClick={() => {
                        window.location.href = `${link}`;
                  }}
            />
      );
}

export default Cards;
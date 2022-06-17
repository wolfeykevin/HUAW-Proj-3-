import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../_context/AppProvider";
import "../_styled/CardGallery.css";

const cardPath = "/assets/cards/";

const CardGallery = () => {

  const { store } = useContext(GlobalContext);
  const [ allCards, setAllCards ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/card/gallery", {
      credentials: 'include'}
      )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCards(data);
      })
      .catch(() => console.log("Oops! Fetching card data failed."));
  }, []);

  const clickHandler = (element) => {
    let cardData = JSON.parse(element.dataset.card)
    console.log(cardData)
  }

  return (
    <div className="card-gallery-container">
      <div className="card-gallery">
        {allCards.map((card) => {
          let filePath = cardPath + card.name + ".png"
          return (
            <img
              className="card"
              key={card.id}
              name={card.name}
              data-card={JSON.stringify(card)}
              src={filePath}
              alt={card.name}
              onClick={(e) => clickHandler(e.target)}
            />
          );
        })}
        {/* {fileNames.map((fileName) => {
          return <img className="card" src={cardPath + fileName} alt="card" />;
        })} */}
      </div>
    </div>
  );
};

export default CardGallery;

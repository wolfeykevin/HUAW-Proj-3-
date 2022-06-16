import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../_context/AppProvider";
import "../_styled/CardGallery.css";

const cardPath = "/assets/cards/";
const fileNames = [
  "(DFAC)  Burn Water.png",
  "(DFAC)  No PT Gear.png",
  "(DFAC)  Ridiculously Sharp Knife.png",
  "(DFAC)  Undercooked Chicken.png",
  "(Finance)  Ignore Calls & E-mails.png",
  "(Finance)  Mess Up Member Pay.png",
  "(Finance)  Misfiled Travel Voucher.png",
  "(Finance)  Schrodinger's Office Hours.png",
  "(General)  Antidepressants.png",
  "(General)  BX Haircut.png",
  "(General)  Commander's Call.png",
  "(General)  Dirtbag Airman.png",
  "(General)  Pull 341.png",
  "(General)  Receive Article 15.png",
  "(General)  Studying the Blade.png",
  "(General)  Take Leave.png",
  "(General)  VItamin M.png",
  "(General)  You Are The 1 Percent.png",
  "(SecFo)  CAC Check.png",
  "(SecFo)  Dorm Raid.png",
  "(SecFo)  Expired Plates.png",
  "(SecFo)  Vehicle Search.png",
  "(SpecOps)  AOR Beard.png",
  "(SpecOps)  Overwhelming Firepower.png",
  "(SpecOps)  This Isn't Even My Final Form.png",
  "(SpecOps)  Write Tell-All Book.png",
];

const CardGallery = () => {
  const [allCards, setAllCards] = useState([]);
  const { store } = useContext(GlobalContext);

  useEffect(() => {
    fetch("http://localhost:8080/api/card/gallery")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCards(data);
      })
      .catch(() => console.log("Oops! Fetching card data failed."));
  }, []);

  return (
    <div className="card-gallery-container">
      <div className="card-gallery">
        {allCards.map((card) => {
          console.log(card.name);
          console.log("(DFAC)  Undercooked Chicken");
          if (card.name === "(DFAC)  Undercooked Chicken") {
            console.log("match");
          }
          return (
            <img
              className="card"
              src={cardPath + card.name + ".png"}
              alt={cardPath + card.name + ".png"}
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

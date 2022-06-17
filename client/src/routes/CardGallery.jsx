import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../_context/AppProvider";
import "../_styled/CardGallery.css";

const cardPath = "/assets/cards/";
const fileNames = [
    "(DFAC) Burn Water.png",
    "(DFAC)  No PT Gear.png",
    "(DFAC)  Ridiculously Sharp Knife.png",
    "(DFAC)  Undercooked Chicken.png",
    "(DFAC)  Turducken.png",
    "(Finance)  Ignore Calls & E-mails.png",
    "(Finance)  Mess Up Member Pay.png",
    "(Finance)  Misfiled Travel Voucher.png",
    "(Finance)  Overpay.png",
    "(Finance)  Schrodinger's Office Hours.png",
    "(General)  Antidepressants.png",
    "(General)  BX Haircut.png",
    "(General)  Commander's Call.png",
    "(General)  Dirtbag Airman.png",
    "(General)  Healthy Coping Mechanisms.png",
    "(General)  Pay With GTC.png",
    "(General)  Pull 341.png",
    "(General)  Receive Article 15.png",
    "(General)  Reenlist.png",
    "(General)  Referred To Mental Health.png",
    "(General)  Refreshing Energy Drink.png",
    "(General)  Snuffy The Green.png",
    "(General)  Special Duty Sorting Hat.png",
    "(General)  Studying the Blade.png",
    "(General)  Take Leave.png",
    "(General)  VItamin M.png",
    "(General)  Well-Written Rebuttal.png",
    "(General)  Yelled At By A Dependa.png",
    "(General)  You Are The 1 Percent.png",
    "(General)  Totally Baller MRE.png",
    "(Intel)  Cuddle Waifu Bodypillow.png",
    "(Intel)  I Talked To A Girl!.png",
    "(Intel)  Send Opponent To Shadow Zone.png",
    "(Intel)  World of Warcraft Raid Wipe.png",
    "(Intel)%20%20Avoid%20The%20Sun.png",
    "(SecFo)  CAC Check.png",
    "(SecFo)  Dorm Raid.png",
    "(SecFo)  Expired Plates.png",
    "(SecFo)  Forced Augmentee.png",
    "(SecFo)  Vehicle Search.png",
    "(SpecOps)  AOR Beard.png",
    "(SpecOps)  Decepticon Attack!.png",
    "(SpecOps)  Overwhelming Firepower.png",
    "(SpecOps)  This Isn't Even My Final Form.png",
    "(SpecOps)  Write Tell-All Book.png"
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
          let filePath = cardPath + card.name + ".png"
          return (
            <img
              className="card"
              // src={"/assets/cards/SpecOps_Write_Tell-All_Book.png"}
              src={cardPath + card.name + ".png"}
              alt={filePath}
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

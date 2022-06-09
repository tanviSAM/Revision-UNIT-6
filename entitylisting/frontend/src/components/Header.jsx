import { react } from "react";
import "./glow_navBar.css";
export const Header = () => {
  const home_cat = [
    "Shop ",
    "Skin Concern ",
    "Ingredrient ",
    "Best-Seller ",
    "Kits ",
    "The Skin Quiz ",
    "Serums $45 Under ",
    "Trail Kit Under $50 ",
    "Minis ",
    "The Dewy Duo ",
    "About us ",
  ];
  return (
    <div className="containerHead">
      <div className="tagHead1">{/* write moving offer tag here */}</div>
      <div className="tagHead2"></div>
      <div className="tagHead3">
        {home_cat.map((elem) => {
          return <div className="catBar">{elem}</div>;
        })}
      </div>
    </div>
  );
};

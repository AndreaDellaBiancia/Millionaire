import { useState } from "react";
import logo from "../../assets/images/milionLogo.png";
import { PriceItem } from "./CssGame";

function Game() {
  const [priceList, setPriceList] = useState<number[]>([
    500, 1000, 1500, 2000, 3000, 5000, 7000, 10000, 15000, 20000, 30000, 70000,
    150000, 300000, 1000000,
  ]);
  
  return (
      <div className="row justify-content-around">
        <div className="row col-12 col-md-8" style={{ border: "1px solid black" }}>
          <div className="col-12">aides</div>
          <div className="col-12">question</div>
          <div className="row col-12">
            <div className="col-6">rep A</div>
            <div className="col-6">rep B</div>
            <div className="col-6">rep C</div>
            <div className="col-6">rep D</div>
          </div>
        </div>
        <ul className="col-12 col-md-3 d-flex flex-column align-items-center">
           {
           priceList.reverse().map((price: number, index: number) =>(
            <PriceItem className="" key={index}>{price === 1000000 ? "1 MILLION": price } €</PriceItem>
           ))}
        </ul>
      </div>
  );
}

export default Game;

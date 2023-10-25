import { useState } from "react";
import { AwardItem } from "./CssAward";

function Awards() {
  const [priceList, setPriceList] = useState<number[]>([
    500, 1000, 1500, 2000, 3000, 5000, 7000, 10000, 15000, 20000, 30000, 70000,
    150000, 300000, 1000000,
  ]);
  return (
    <ul className="col-12 col-md-3 d-flex flex-column align-items-center">
      {priceList.reverse().map((price: number, index: number) => (
        <AwardItem className="" key={index}>
          {price === 1000000 ? "1 MILLION" : price} €
        </AwardItem>
      ))}
    </ul>
  );
}

export default Awards;

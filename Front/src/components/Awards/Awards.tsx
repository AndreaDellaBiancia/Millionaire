import { useState } from "react";
import { AwardItem, AwardItemWin } from "./CssAward";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Awards() {
  const questionNb = useSelector((state: RootState) => state.game.questionNb);
  const awards = useSelector((state: RootState) => state.awards.awards);
  const reversedAwards = [...awards].reverse();

  return (
    <ul className="col-12 col-md-3 d-flex flex-column align-items-center">
      {reversedAwards.map((award: number, index: number) =>
         awards[questionNb -1] >= award ? (
          <AwardItemWin key={index}>
            {award === 1000000 ? "1 MILLION" : award} €
          </AwardItemWin>
        ) : (
          <AwardItem key={index}>
            {award === 1000000 ? "1 MILLION" : award} €
          </AwardItem>
        )
      )}
    </ul>
  );
}

export default Awards;

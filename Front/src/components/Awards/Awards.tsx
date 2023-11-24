import { AwardItem, AwardItemWin, AwardsList } from "./CssAward";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Awards() {
  const questionNb = useSelector((state: RootState) => state.game.questionNb);
  const awards = useSelector((state: RootState) => state.awards.awards);
  const isGoodAnswer = useSelector((state: RootState) => state.game.isGoodAnswer);

  const reversedAwards = [...awards].reverse();

  return (
    <AwardsList>
      {reversedAwards.map((award: number, index: number) =>
        ((awards[questionNb - 1] >= award) || (awards[questionNb] === award && isGoodAnswer) ) ? (
          <AwardItemWin key={index}>
            {award === 1000000 ? "1 MILLION" : award} €
          </AwardItemWin>
        ) : (
          <AwardItem key={index}>
            {award === 1000000 ? "1 MILLION" : award} €
          </AwardItem>
        )
      )}
    </AwardsList>
  );
}

export default Awards;

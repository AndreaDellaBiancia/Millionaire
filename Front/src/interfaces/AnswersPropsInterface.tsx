import BadAnsw from "./BadAnswInterface";
import GoodAnsw from "./GoodAnswInterface";

interface AnswersPropsInterface {
  goodAnswer?: GoodAnsw;
  badAnswers?: BadAnsw[];
}

export default AnswersPropsInterface;

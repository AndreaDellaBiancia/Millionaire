import BadAnsw from "./BadAnswInterface";
import GoodAnsw from "./GoodAnswInterface";
import levelDifficulty from "./LevelDifficultyInterface";

interface QuestionsAnswers {
  id?: number;
  title?: string;
  price?: number;
  levelDifficulty?: levelDifficulty;
  goodAnsw? : GoodAnsw,
  badAnsw? : BadAnsw[],
}

export default QuestionsAnswers;

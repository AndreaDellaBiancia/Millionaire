import BadAnsw from "./BadAnswInterface";
import GoodAnsw from "./GoodAnswInterface";
import HomeHelpInterface from "./HomeHelpInterface";
import levelDifficulty from "./LevelDifficultyInterface";

interface QuestionsAnswers {
  id?: number;
  title?: string;
  price?: number;
  levelDifficulty?: levelDifficulty;
  goodAnsw? : GoodAnsw,
  badAnsw? : BadAnsw[],
  homeHelp? : HomeHelpInterface,
}

export default QuestionsAnswers;

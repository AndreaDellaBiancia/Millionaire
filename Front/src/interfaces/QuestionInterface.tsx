import levelDifficulty from "./LevelDifficultyInterface";

interface Question {
  id: number;
  title: string;
  price: number;
  levelDifficulty: levelDifficulty;
}

export default Question;

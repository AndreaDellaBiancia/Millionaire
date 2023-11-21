import levelDifficulty from "./LevelDifficultyInterface";

interface Question {
  id: number;
  title: string;
  award: number;
  levelDifficulty: levelDifficulty;
}

export default Question;

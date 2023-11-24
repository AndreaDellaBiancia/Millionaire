import Help from "./HelpInterface";
import levelDifficulty from "./LevelDifficultyInterface";
import User from "./UserInterface";

interface Game {
  id: number;
  points: number;
  questionNb: number;
  created_at: string;
  levelDifficulty: levelDifficulty;
  user: User;
  helps: Help[]
}

export default Game;

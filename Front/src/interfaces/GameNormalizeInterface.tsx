import Help from "./HelpInterface";

interface GameNormalize {
  id: number;
  points: number;
  created_at: string;
  level: string ;
  questionAward: string;
  helps: Help[];
}

export default GameNormalize;

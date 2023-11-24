import Game from "../interfaces/GameInterface";
import GameNormalize from "../interfaces/GameNormalizeInterface";

export function dateNormalize(dateString: string): string {
  const date = new Date(dateString);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString(
    "fr-FR",
    options as Intl.DateTimeFormatOptions
  );

  return formattedDate;
}

export function levelNormalize(level: string): string {
  if (level === "easy") {
    return "FACILE";
  } else {
    return "DIFFICILE";
  }
}

export function questionAwardNormalize(questionNb: number): string {
  switch (questionNb) {
    case 1:
      return "500";
    case 2:
      return "1.000";
    case 3:
      return "1.500";
    case 4:
      return "2.000";
    case 5:
      return "3.000";
    case 6:
      return "5.000";
    case 7:
      return "7.000";
    case 8:
      return "10.000";
    case 9:
      return "15.000";
    case 10:
      return "20.000";
    case 11:
      return "30.000";
    case 12:
      return "70.000";
      case 13:
      return "150.000";
    case 14:
      return "300.000";
    case 15:
      return "1 MILLION";
    default:
      return "0";
  }
}

export function gameNormalize(games: Game[]):GameNormalize[] {
  return games.map((game) => {
    return {
      id: game.id,
      points: game.points,
      created_at: dateNormalize(game.created_at),
      level: levelNormalize(game.levelDifficulty.level),
      questionAward: questionAwardNormalize(game.questionNb),
      helps: game.helps,
    };
  });
}

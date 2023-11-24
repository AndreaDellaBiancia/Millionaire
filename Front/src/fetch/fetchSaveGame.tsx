import User from "../interfaces/UserInterface";

export async function saveGame(
  points: number,
  questionNb: number,
  user: User,
  level: string,
  isAskPublic: boolean, 
  isCallHome: boolean, 
  isHalfPossibility: boolean
) {

  const token = localStorage.getItem("token");
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({points, questionNb, user, level,  isAskPublic, isCallHome, isHalfPossibility}),
      
    };
    const response = await fetch(
      "http://localhost:5000/api/game/save",
      requestOptions
    );

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return (await response.json()).message;
  } catch (error) {
    throw error;
  }
}

import User from "../interfaces/UserInterface";

export async function saveGame(points: number, questionNb: number, user: User, level: string) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({points, questionNb, user, level}),
    };
     const response = await fetch("http://localhost:5000/api/game", requestOptions)
     
     if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return (await response.json()).message;
  } catch (error) {
    throw error;
  }
}

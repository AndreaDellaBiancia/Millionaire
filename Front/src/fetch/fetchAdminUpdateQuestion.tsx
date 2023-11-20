import BadAnsw from "../interfaces/BadAnswInterface";
import GoodAnsw from "../interfaces/GoodAnswInterface";
import HomeHelpInterface from "../interfaces/HomeHelpInterface";
import Question from "../interfaces/QuestionInterface";

export async function updateQuestion(
  question: Question,
  goodAnswer: GoodAnsw,
  badAnswer1: BadAnsw,
  badAnswer2: BadAnsw,
  badAnswer3: BadAnsw,
  homeHelp : HomeHelpInterface
) {
  const token = localStorage.getItem("token");
  
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({question, goodAnswer, badAnswer1, badAnswer2, badAnswer3, homeHelp}),
      
    };
    const response = await fetch(
      "http://localhost:5000/api/admin/update-question",
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

export async function getQuestions(level: string) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({level}),
    };
     const response = await fetch("http://localhost:5000/api/game", requestOptions)
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}

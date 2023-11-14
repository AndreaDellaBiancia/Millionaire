export async function getQuestions(level: string) {
  try {
     const response = await fetch(`http://localhost:5000/api/game/${level}`)
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}

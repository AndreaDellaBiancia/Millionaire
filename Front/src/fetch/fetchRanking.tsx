
export async function getRanking() {
  try {
    const response = await fetch("http://localhost:5000/api/ranking") 
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}

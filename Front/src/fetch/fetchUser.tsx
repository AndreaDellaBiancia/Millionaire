
export async function getUser(userId: number) {
  try {
    const response = await fetch(`http://localhost:5000/api/user/${userId}`) 
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}

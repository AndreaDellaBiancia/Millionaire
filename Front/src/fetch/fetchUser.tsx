
export async function getUser(userId: number) {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
      headers: {Authorization: `Bearer ${token}`}
    }) 
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}

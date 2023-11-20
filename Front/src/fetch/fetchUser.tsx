
export async function getUser(userId: number | null | undefined){
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
      headers: {Authorization: `Bearer ${token}`}
    }) 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}

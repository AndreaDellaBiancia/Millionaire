
export async function getQuestionById(questionId: number){
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`http://localhost:5000/api/admin/view/${questionId}`, {
      headers: {Authorization: `Bearer ${token}`}
    }) 
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}

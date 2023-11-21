export async function deleteQuestion(questionId: number | undefined): Promise<any> {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(`http://localhost:5000/api/admin/delete-question/${questionId}`, {
      headers: { Authorization: `Bearer ${token}` },
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Rejeter explicitement l'erreur
  }
}

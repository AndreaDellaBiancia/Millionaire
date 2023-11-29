export async function sendEmail(email: string) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email}),
    };
     const response = await fetch("http://localhost:5000/api/forgot-password", requestOptions)
     
     if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return (await response.json()).message;
  } catch (error) {
    throw error;
  }
}

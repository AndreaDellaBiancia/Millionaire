export async function registration(email: string, username: string, password: string) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email, username, password}),
    };
     const response = await fetch("http://localhost:5000/api/registration", requestOptions)
     
     if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return (await response.json()).message;
  } catch (error) {
    throw error;
  }
}

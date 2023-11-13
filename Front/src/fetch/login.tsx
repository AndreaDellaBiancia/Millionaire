export async function getToken(email: string, password: string) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email, password }),
    };
     const response = await fetch("http://localhost:5000/api/auth", requestOptions)
     const  data = await response.json()
     return data.token;
  } catch (error) {
    console.log(error)
  }
}

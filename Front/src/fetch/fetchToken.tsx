export async function getToken(email: string, password: string) {
  try {
    const response = await fetch("http://localhost:5000/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return (await response.json());
  } catch (error) {
    throw error;
  }
}

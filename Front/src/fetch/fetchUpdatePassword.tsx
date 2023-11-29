export async function updatePassword(password: string, token: string) {
  try {
    const response = await fetch("http://localhost:5000/api/update-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, token}),
    });

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return (await response.json());
  } catch (error) {
    throw error;
  }
}

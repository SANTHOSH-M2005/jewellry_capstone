export const sendText = async (text: string) => {
  const response = await fetch("https://af61-34-187-174-2.ngrok-free.app/textSearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 🔑 THIS FIXES 415
    },
    body: JSON.stringify({ query: text }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  return response.json();
};

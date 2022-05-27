export async function fetchRecent() {
  try {
    const response = await fetch("http://localhost:3000/recent");
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function addRecent(payload) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: payload.id,
        volumeInfo: payload.volumeInfo,
      }),
    };
    const response = await fetch(
      "http://localhost:3000/recent",
      requestOptions
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

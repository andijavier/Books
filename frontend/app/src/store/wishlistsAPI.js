export async function fetchWishlists() {
  try {
    const response = await fetch("http://localhost:3000/wishlists");
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function findById(id) {
  try {
    const response = await fetch("http://localhost:3000/wishlists/" + id);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export async function addWishlists(payload) {
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
      "http://localhost:3000/wishlists",
      requestOptions
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

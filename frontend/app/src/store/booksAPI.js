export async function fetchBooks(keyword = "all") {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}`;
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

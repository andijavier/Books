export default function errHandler(err, req, res, next) {
  if (err.name === "Not Found") {
    res.status(404).json({ message: "Not Found" });
  } else if (err.name === "bad request") {
    res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
}

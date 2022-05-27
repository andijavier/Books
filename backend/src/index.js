import "dotenv/config";
import express from "express";
import cors from "cors";
import errHandler from "./middlewares/errHandler";
import router from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(errHandler);

app.listen(port, () => {
  console.log("listening to port:", port);
});

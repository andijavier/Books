import { register, findAll, findById } from "../model/recent";

export default class RecentController {
  static async register(req, res, next) {
    try {
      const { id, volumeInfo } = req.body;
      const isAlreadyExist = await findById(id);

      if (isAlreadyExist) {
        next({ name: "bad request", message: "Already in recent" });
      } else {
        await register({ id, volumeInfo });
        res.status(201).json({ message: "Book has been added to recent" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async find(req, res, next) {
    try {
      const books = await findAll();
      console.log("masuk controller recent", books);
      res.status(200).json(books);
    } catch (err) {
      next(err);
    }
  }
}

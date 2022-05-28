import { register, findAll, findById } from "../model/wishlist";

export default class WishlistController {
  static async register(req, res, next) {
    try {
      const { id, volumeInfo } = req.body;
      const isAlreadyExist = await findById(id);

      if (isAlreadyExist) {
        next({ name: "bad request", message: "Already in Wishlist" });
      } else {
        await register({ id, volumeInfo });
        res.status(201).json({ message: "Book has been added to wishlist" });
      }
    } catch (err) {
      next(err);
    }
  }

  static async find(req, res, next) {
    try {
      const books = await findAll();
      res.status(200).json(books);
    } catch (err) {
      next(err);
    }
  }

  static async findByIdController(req, res, next) {
    try {
      const { id } = req.params;
      const isAlreadyExist = await findById(id);
      res.status(200).json(isAlreadyExist);
    } catch (err) {
      next(err);
    }
  }
}

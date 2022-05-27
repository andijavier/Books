import mongoose from "../config/mongodb";

const wishlistSchema = new mongoose.Schema(
  {
    id: String,
    volumeInfo: Object,
  },
  {
    timestamps: true,
    collection: "wishlists",
  }
);

export const Wishlists = mongoose.model("wishlists", wishlistSchema);

export const register = async (payload) => {
  return await Wishlists.create({
    id: payload.id,
    volumeInfo: payload.volumeInfo,
  });
};

export const findAll = async () => {
  return await Wishlists.find();
};

export const findById = async (id) => {
  return await Wishlists.findOne({
    id,
  });
};

import mongoose from "../config/mongodb";

const recentSchema = new mongoose.Schema(
  {
    id: String,
    volumeInfo: Object,
  },
  {
    timestamps: true,
    collection: "recents",
  }
);

export const Recents = mongoose.model("recents", recentSchema);

export const register = async (payload) => {
  return await Recents.create({
    id: payload.id,
    volumeInfo: payload.volumeInfo,
  });
};

export const findAll = async () => {
  return await Recents.find();
};

export const findById = async (id) => {
  return await Recents.findOne({
    id,
  });
};

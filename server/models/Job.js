import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    company: { type: String, required: true },
    position: { type: String, default: "no description provided" },
    hours: { type: Number, required: true },
    rate: { type: Number, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;

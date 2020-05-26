import mongoose from "mongoose";
import Car from "../models/Car";
import House from "../models/House";
import Job from "../models/Job";

// NOTE Extablish all models and the context to thier collection
class DbContext {
  Cars = mongoose.model("Cars", Car);
  Houses = mongoose.model("Houses", House);
  Jobs = mongoose.model("Jobs", Job);
}

export const dbContext = new DbContext();

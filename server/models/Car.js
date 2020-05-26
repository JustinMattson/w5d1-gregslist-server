import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, default: "no description provided" },
        make: { type: String, required: true },
        model: { type: String, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        imgUrl: { type: String, default: "http://placehold.it/200x200" }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;

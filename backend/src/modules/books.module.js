import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pdfLink: String,
},{
    timestamps: true
});

export const Book = mongoose.model("Book", bookSchema);
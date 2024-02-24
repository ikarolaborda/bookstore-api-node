import mongoose from 'mongoose';
import {authorSchema} from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Authors' }]
}, { versionKey: false });

const Book = mongoose.model('Books', bookSchema);

export default Book;
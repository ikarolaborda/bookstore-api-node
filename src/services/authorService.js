import {Author} from "../models/Author.js";
import Book from "../models/Book.js";

async function getAll () {
    try {
        return await Author.find({}).populate('books');
    } catch (error) {
        console.error(error.message);
    }

}

async function getOne(id) {
    try {
        return await Author.findById({ _id: id }).populate('books');
    }catch (error) {
        console.error(error.message);
    }
}

async function add(params) {
    try {
        const newAuthor = new Author(params);
        return await Author.create(newAuthor);
    } catch (error) {
        console.error(error.message);
    }
}

async function edit(id, params) {
    try {
        return await Author.findByIdAndUpdate(id, params, { new: true });
    }catch (error) {
        console.error(error.message);
    }
}

async function remove(id) {
    try {
        return await Author.findByIdAndDelete(id);
    } catch (error) {
        console.error(error.message);
    }
}

async function getAuthorsBooks(authorId) {
    try {
        return await Book.find({authors: authorId})
            .populate('authors');
    } catch (error) {
        console.error("Error fetching books by author:", error);
        throw error;  // Re-throw to allow for centralized error handling
    }
}

export default {
    getAll,
    getOne,
    add,
    edit,
    remove,
    getAuthorsBooks
};
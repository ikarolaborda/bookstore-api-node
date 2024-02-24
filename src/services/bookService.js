import Book from "../models/Book.js";

async function getAll () {
    try {
        return await Book.find({}).populate('authors');
    } catch (error) {
        console.error(error.message);
    }

}

async function getOne(id) {
    try {
        return await Book.findById({ _id: id }).populate('authors');
    }catch (error) {
        console.error(error.message);
    }
}

async function add(params) {
    try {
        const newBook = new Book(params);
        return await Book.create(newBook);
    } catch (error) {
        console.error(error.message);
    }
}

async function edit(id, params) {
    try {
        return await Book.findByIdAndUpdate(id, params, { new: true });
    }catch (error) {
        console.error(error.message);
    }
}

async function remove(id) {
    try {
        return await Book.findByIdAndDelete(id);
    } catch (error) {
        console.error(error.message);
    }
}

export default {
    getAll,
    getOne,
    add,
    edit,
    remove
};
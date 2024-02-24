import bookService from "../services/bookService.js";
import authorService from "../services/authorService.js";

class BookController {
    static async getAll(req, res) {
        try {
            bookService.getAll()
                .then((books) => {
                res.status(200).json({books: books});
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async getOne(req, res) {
        try {
            bookService.getOne(req.params.id)
                .then((book) => {
                res.status(200).json({book: book});
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async add(req, res) {
        try {
            /*If the authors[] array is present, we must look if this author exists */
            if (req.body.authors) {
                for (const author of req.body.authors) {
                    try {
                        const authorExists = await authorService.getOne(author);
                        if (!authorExists) {
                            res.status(404).json({ error: `Author with id ${author} not found` });
                        }
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
            bookService.add(req.body)
                .then((book) => {
                res.status(201).json({message: 'Book added successfully', book: book});
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async update(req, res) {
        try {
            bookService.edit(req.params.id, req.body)
                .then((book) => {
                res.status(200).json({ message: 'Book updated successfully' });
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async remove(req, res) {
        try {
            bookService.remove(req.params.id)
                .then(() => {
                res.status(200).json({ message: 'Book deleted successfully' });
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

export default BookController;
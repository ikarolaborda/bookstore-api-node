import authorService from "../services/authorService.js";

class AuthorController {

    static async getAll(req, res) {
        try {
            authorService.getAll()
                .then((authors) => {
                res.status(200).json({authors: authors});
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async getOne(req, res) {
        try {
            authorService.getOne(req.params.id)
                .then((author) => {
                res.status(200).json({author: author});
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async getBooks(req, res) {
        try {
            authorService.getAuthorsBooks(req.params.id)
                .then((books) => {
                res.status(200).json({books: books});
                });
        }catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async add(req, res) {
        try {
            authorService.add(req.body)
                .then((author) => {
                res.status(201).json({message: 'Author added successfully', author: author});
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async update(req, res) {
        try {
            authorService.edit(req.params.id, req.body)
                .then((author) => {
                res.status(200).json({ message: 'Author updated successfully' });
            });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    static async remove(req, res) {
        try {
            authorService.remove(req.params.id)
                .then(() => {
                    res.status(200).json({message: 'Author deleted successfully'});
                });
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }


}

export default AuthorController;
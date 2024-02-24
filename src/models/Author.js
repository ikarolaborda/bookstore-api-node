import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    countryOfOrigin: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
}, { versionKey: false });

const Author = mongoose.model('Authors', authorSchema);

export {
    Author,
    authorSchema
}
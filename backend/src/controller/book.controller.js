import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../modules/books.module.js";

const addBook = asyncHandler(async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.json(book);
    }catch(err){
        throw new ApiError(
            500,
            "Something went wrong from book.controller.js"
        )
    }
})

export {addBook};
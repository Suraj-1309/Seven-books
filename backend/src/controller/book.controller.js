import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Book } from "../modules/books.module.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const addBook = asyncHandler(async (req, res) => {
  try {
    const { title, author } = req.body;
    console.log("req body: ", req.body);
    console.log("req file: ", req.files);

    const bookPdfLocalPath = req.files?.book?.[0]?.path;

    // upload on cloudinary
    const bookLink = await uploadOnCloudinary(bookPdfLocalPath);

    if (!bookLink?.url) {
      throw new ApiError(500, "Failed to upload PDF to Cloudinary");
    }

    const book = await Book.create({
      title,
      author,
      pdfLink: bookLink.url,
    });

    const createdBook = await Book.findById(book._id).select();

    if (!createdBook) {
      throw new ApiError(500, "Something went wrong while uploading the book");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdBook, "Book is added Successfully"));
  } catch (err) {
    throw new ApiError(500, "Something went wrong from book.controller.js");
  }
});

export { addBook };

// title: String,
//     author: String,
//     pdfLink: String,
//     coverImage: String,

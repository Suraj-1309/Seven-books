import express from "express";
import { Router } from "express";
import { addBook } from "../controller/book.controller.js";
import { hello } from "../controller/hello.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route('/addBook').post(
    upload.fields([
        {
            name: "book",
            maxCount: 1,
        }]),
    addBook);

    
router.route('/').get(hello);

export default router;

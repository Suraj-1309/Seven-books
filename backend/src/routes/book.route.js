import express from "express";
import { Router } from "express";
import { addBook } from "../controller/book.controller.js";
import {hello} from  "../controller/hello.controller.js";

const router = Router();

router.post('/addBook', addBook);
router.get('/', hello);

export default router;

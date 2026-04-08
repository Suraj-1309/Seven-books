import express from "express";
import { Book } from "../modules/books.module";
import { Router } from "express";

const router = Router();

router.post("/add").post(addBook);
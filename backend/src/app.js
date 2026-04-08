import express from "express";
const app = express();

app.use(express.json()); // express middleware



import bookRouter from './routes/book.route.js'
app.use('', bookRouter)

export {app};
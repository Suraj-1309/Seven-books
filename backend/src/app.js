import express from "express";

const app = express();

app.use(express.json()); // express middleware

export {app};
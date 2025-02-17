import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("API fornecedor de energia");
});

export default app;
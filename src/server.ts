import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ message: "Server is Ok@" });
});

app.listen(3333, () => console.log("Server is listening at port 3333"));

import express from "express";
import "./discord";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", (request, response) => {
  return response.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));



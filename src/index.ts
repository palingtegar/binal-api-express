import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import usersRouters from "./routers/usersRouters";

const PORT = process.env.PORT || 8080;
const app = express();

// untuk bisa akses data dari tempat lain. memberi akses ke orang lain
app.use(cors());

//nerima/membaca req.body (middleware)
app.use(express.json());

app.use("/users", usersRouters);
//middleware error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

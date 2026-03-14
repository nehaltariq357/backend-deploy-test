import express, { Request, Response } from "express";
import userRoutes from "../routes/userRoutes";

const app = express();

app.use(express.json());
// app.use("/", (req: Request, res: Response) => {
//     res.send("welcome to blog app")
// })

app.use("/users", userRoutes);

export default app;
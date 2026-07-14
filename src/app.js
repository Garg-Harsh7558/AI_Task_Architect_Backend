import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authMiddleware from "../middleware/authMiddleware.js";
import { register, login, logout } from "./api/auth/auth.js";
import createTask from "./api/Task/createTask.js";
import displayTask from "./api/Task/displayTask.js";
import deleteTask from "./api/Task/deleteTask.js";
import getArchitect from "./api/AiGenerate/Architect.js";
const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:4200",
  credentials: true
}));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Backend is running");
});
app.post("/register",register);
app.post("/login",login);

app.use(authMiddleware)

app.post("/create-task",createTask);

app.post("/display-task",displayTask);

app.delete("/delete-task/:id",deleteTask);

app.post("/logout",logout)
// app.post("/architect",async(req,res)=>{try {
//   const {title,description}=req.body.taskdetails || req.body || {};
//   const architect=await getArchitect({title:"create a task manager",description:"create a task manager"});
//   return res.status(201).json(architect);
// } catch (error) {
//   return res.status(500).json({message:error.message})
// }
// });


export default app;
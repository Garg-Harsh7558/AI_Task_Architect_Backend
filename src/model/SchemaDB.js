import mongoose from "mongoose";
import User from "./User.js";
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })
const Task = mongoose.model("Task", TaskSchema);
export default Task;
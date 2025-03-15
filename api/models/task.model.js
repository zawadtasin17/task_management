import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: true
    },
    status: {
        type: String,
        default: true,
        default: "Pending",
        enum: ["Pending", "Running","Completed","False"]
    },
}, { timestamps: true });

const TaskModel = new mongoose.model("Task", TaskSchema, "tasks");

export default TaskModel;
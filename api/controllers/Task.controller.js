export const createTask = async (req, res) => {
    try{
        const {title, description} = req.body;
        const newTask = new TaskModel({
            title,
            description
        });
        await newTask.save();
        res.status(201).json
        ({
            status: true, 
            message: "Task created successfully",
        });
    } catch (error) {
        res.status(201).json
        ({
            status: true, 
            message: "Failed to create task",
        });
    }
}
export const getAllTask = async (req, res) => {
    try{
        const taskData = await TaskModel.find().sort({createdAt: -1}).lean().exec();

        res.status(201).json
        ({
            status: true, 
            taskData

        });
    } catch (error) {
        res.status(201).json
        ({
            status: true, 
            message: "Failed to get task",
            task: newTask
        });
    }
}
export const showTask = async (req, res) => {
    try{
        const {taskid} = req.params;
        const taskData = await TaskModel.findbyId(taskid).lean().exec();

        res.status(201).json
        ({
            status: true, 
            taskData

        });
    } catch (error) {
        res.status(201).json
        ({
            status: true, 
            message: "Failed to show task",
            task: newTask
        });
    }
}
export const updateTask = async (req, res) => {
    try{
        const {taskid} = req.params;
        const {title, description, status} = req.body;

        const taskData = await TaskModel.findbyIdAndUpdate(taskid, {title, description, status}, {new: true});

        const newTask = new TaskModel({
            title,
            description
        });
        await task.save();
        res.status(201).json
        ({
            status: true, 
            message: "Task updated successfully",
        });
    } catch (error) {
        res.status(201).json
        ({
            status: true, 
            message: error.message
        });
    }
}
export const deleteTask = async (req, res) => {
    try{
        const {taskid} = req.params;

        await TaskModel.findbyIdAndDelete(taskid);

        res.status(201).json
        ({
            status: true, 
            message: "Task deleted successfully",
        });
    } catch (error) {
        res.status(201).json
        ({
            status: true, 
            message: error.message
        });
    }
}
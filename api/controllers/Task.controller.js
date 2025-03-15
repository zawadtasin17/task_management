export const createTask = async (req, res) => {
    try{
        const {title, description} = req.body;
        const task = new TaskModel({
            title,
            description
        });
        const newTask = await task.save();
        res.status(201).json
        ({
            message: "Task created successfully",
            task: newTask
        });
    } catch (error) {
        if (error instanceof ZodError) {
            const getError = getZodError(error.errors);
            setError(getError);
        }
        showToast("error", error.message);
    }
}
export const getAllTask = async (req, res) => {}
export const showTask = async (req, res) => {}
export const updateTask = async (req, res) => {}
export const deleteTask = async (req, res) => {}
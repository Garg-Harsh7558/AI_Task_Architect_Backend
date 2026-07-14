import Task from "../../model/taskSchema.js";

const deleteTask=async(req,res)=>{
    try {
        const {id}=req.params;
        const task=await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(400).json({message:"task not found"})
        }
        return res.status(200).json({message:"task deleted successfully"})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export default deleteTask
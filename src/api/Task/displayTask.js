import Task from "../../model/taskSchema.js";

const displayTask=async(req,res)=>{
    try {
        const tasks=await Task.find({
            author:req.user.id
        })
        return res.status(200).json({message:"tasks fetched successfully",tasks})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export default displayTask 
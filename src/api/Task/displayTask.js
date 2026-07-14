import Task from "../../model/taskSchema.js";

const displayTask=async(req,res)=>{
    try {
        console.log("displayTask called for user:", req.user.id);
        const tasks=await Task.find({
            author:req.user.id
        })
        console.log("Found tasks:", tasks.length);
        return res.status(200).json({message:"tasks fetched successfully",tasks})
    } catch (error) {
        console.error("displayTask error:", error);
        return res.status(500).json({message:error.message})
    }
}

export default displayTask 
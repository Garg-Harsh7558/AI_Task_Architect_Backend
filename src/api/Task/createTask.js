import Task from "../../model/taskSchema.js";
import getArchitect from "../AiGenerate/Architect.js";
const createTask=async(req,res)=>{
    try {
        const {title,description}=req.body.taskdetails;
        if(!title || !description) {
            return res.status(400).json({message:"title and description are required"})
        }
        
        const architect=await getArchitect({title,description});
        const AiArchitect=architect.output;
        
        const task=await Task.create({
            title,
            description,
            AiArchitect,
            author:req.user.id
        })
        return res.status(201).json({message:"task created successfully",AiArchitect})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export default createTask
import axios from 'axios';

const getArchitect=async({title,description})=>{
    try {
        const url="https://api.groq.com/openai/v1/responses";
        const structuredprompt=`
        You are the "Task Architect". 
        Your job is to analyze a task description and generate a concise, technical, step-by-step implementation plan on how to complete this task.  
        Input:
        Title: ${title}
        Description: ${description}
        
        Output format (no explanations):conclude only in exact 7 points,each points separated by **enil**
        `
        const data={model:"openai/gpt-oss-120b",input:structuredprompt}
        const config={headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.GROQ_API_KEY}`}}
        
        const response=await axios.post(url,data,config);
        console.log(response.data.output);
        return {output:response.data.output[1].content[0].text}

    } catch (error) {
        console.log("error in getArchitect",error.message)
    }
}



export default getArchitect;


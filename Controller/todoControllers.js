import todoCollection from "../Model/todoSchema.js"

export const addTodo=async(req,res)=>{
    try{
        const data = todoCollection(req.body);
        await data.save()
        res.status(201).json({message:"data has been stored"})
    }catch(err)
    {
        res.status(500).json({message:err})
    }
}
export const getTodo =async(req,res) =>{
    try{
        const data =  await todoCollection.find();
        res.json(data);
 
    }catch(err){
        res.status(500).json({message:err})
    }

}
export const UpdateTodo=async(req,res)=>{
    try{
        const data=await todoCollection.findByIdAndUpdate(req .params.id,req.body,{new:true});
        res.json(data); 
        
    }catch(err){
        res.status(400).json({message:err})
    }
}
export const deleteTodo=async(req,res)=>{
    try{
        await todoCollection.findByIdAndDelete(req.params.id);
        res.json({message:"data has been deleted"})
    }catch(err){
        res.status(500).json({message:err})
    }
}
const ToDoModel=require("../models/model")

module.exports.getTodo=async (req,res)=>{
    const toDo=await ToDoModel.find() 
    res.send(toDo)
}

module.exports.setTodo=async (req,res)=>{
    console.log(req.body)
    const {text}=req.body 
    ToDoModel.create({text}).then((data)=>{
       console.log("Added Todo Successfully...")
       console.log(data)
       res.send(data)
    })
}

module.exports.updateTodo=async (request,response)=>{
    const {_id,text}=request.body 
    console.log(request.body)
    ToDoModel.findByIdAndUpdate(_id,{text}).then(()=>response.send("Todo created successfully.."))
    .catch((error)=>console.log(error))
}

module.exports.deleteTodo=async (request,response)=>{
    const {_id}=request.body 
    ToDoModel.findByIdAndDelete(_id)
    .then(()=>response.send("Todo Deleted successfully.."))
    .catch((error)=>console.log(error))
}
const {Router}=require("express")
const { getTodo, setTodo, deleteTodo, updateTodo } = require("../controllers/todoController")

const router=Router()

router.get("/",getTodo)
router.post("/save",setTodo)
router.post("/update",updateTodo)
router.post("/delete",deleteTodo)

module.exports=router
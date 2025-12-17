import { get } from "mongoose";
import { addTodo } from "../Controller/todoControllers.js";
import { getTodo } from "../Controller/todoControllers.js";
import { UpdateTodo } from "../Controller/todoControllers.js";
import { deleteTodo } from "../Controller/todoControllers.js";
import express from 'express'
const route=express.Router()

route.post('/addtodo',addTodo);
route.get('/gettodo',getTodo);
route.put('/updatetodo/:id',UpdateTodo);
route.delete('/deletetodo/:id',deleteTodo);
export default route
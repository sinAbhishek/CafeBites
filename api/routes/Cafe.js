import {createItem,getItem,getAll,update} from "../controller/Item.js"
import  express from "express";
const router=express.Router();

router.post("/",createItem);
router.get("/:id",getItem);
router.get("/",getAll);
router.put("/",update)
export default router
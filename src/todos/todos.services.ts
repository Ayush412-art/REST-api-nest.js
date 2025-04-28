import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { todosDocument , todos } from "./todos.model";
import { Model } from "mongoose";

@Injectable()
export class todos_service {
    constructor(@InjectModel(todos.name) private todoModel : Model<todosDocument> ){}

    async getAllTodos() : Promise<todos[]>{
        return  this.todoModel.find({});
    }
    async getTodosById(id : string): Promise<todos | null>  {
        return this.todoModel.findById(id)
    }
    async postTodos(todos_id : number , title : string , description : string , completed : boolean): Promise<void>{
            const addTodos = new this.todoModel({todos_id , title , description , completed});
            addTodos.save()
            return;
    }
    async updateTodos(id : string , updateData : any) : Promise<void>{
        this.todoModel.findByIdAndUpdate(id , updateData)
        return;
    }
    async deleteTodos(id : string) : Promise<void>{
        this.todoModel.findByIdAndDelete(id)
        return;
    }
}

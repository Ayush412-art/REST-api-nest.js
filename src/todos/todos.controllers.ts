import { Controller , Get , Post , Put ,Delete  , Param, Body} from "@nestjs/common";
import { todos_service } from "./todos.services";
import { todos } from "./todos.model";

@Controller("/api")

export class todos_controllers {
    constructor(private todos_service : todos_service) {}

    @Get('/all_todos')

    async all_todos() : Promise<todos[]>{
        return this.todos_service.getAllTodos();
    }

    @Get('/todos/:id')
    async todosByid(@Param('id') id : string ) : Promise<todos | null >{
        return this.todos_service.getTodosById(id)

    }

    @Post('/create_todos')
    async createTodos(@Body('todos_id') todos_id : number , @Body("title") title : string,
    @Body('description') description : string , @Body('completed') completed : boolean ) : Promise<string>{

        this.todos_service.postTodos(todos_id , title , description , completed);
        return "todos created"
    }

    @Put('/update/:id')
    async update_todos(@Param('id') id : string , @Body() updatedata : Partial<todos> ) : Promise<string | void>{
            this.todos_service.updateTodos(id , updatedata);
            return "todos updated";
    }

    @Delete('/delete/:id')

    async delete_todos(@Param('id') id : string ) : Promise<void>{
        this.todos_service.deleteTodos(id);
    }

}
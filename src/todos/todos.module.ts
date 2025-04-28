import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { todos_service } from "./todos.services";
import { todos_controllers } from "./todos.controllers";
import { todos , todos_Schema } from "./todos.model";


@Module({
    imports :[MongooseModule.forFeature([{name : todos.name , schema : todos_Schema}])],
    controllers : [todos_controllers],
    providers : [todos_service]
})

export class todosModule{}
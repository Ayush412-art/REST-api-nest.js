import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { todosModule } from './todos/todos.module';
@Module({
  imports: [

    MongooseModule.forRoot("mongodb+srv://iamayush449:1rD34hwk8MJZ2X0u@ayush.mv5dzyj.mongodb.net/"),
    todosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

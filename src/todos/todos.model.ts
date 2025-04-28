import {Schema , Prop , SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()   
export class todos extends Document {
@Prop({required : true})
  todos_id : number
@Prop()
  title : string
@Prop() 
    description : string
@Prop({required : true})
    completed : boolean    

}
export type todosDocument = todos & Document 
export const todos_Schema = SchemaFactory.createForClass(todos);
import { prop } from '@typegoose/typegoose';


export class Action
{
    @prop()
    name:string
    @prop()
    description:string;
    @prop()
    code:number;
}
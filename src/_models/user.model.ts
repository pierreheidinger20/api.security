import { prop } from '@typegoose/typegoose';
import { Application } from './application.model';

export class User  
{
    @prop()
    _id:String;
    @prop()
    name:String;
    @prop()
    lastName:String;
    @prop()
    username:String;
    @prop()
    password:String;
    @prop()
    email:String;
    @prop()
    applications: Application[]
}

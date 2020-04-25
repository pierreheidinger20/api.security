import { prop } from '@typegoose/typegoose';
import { Action } from './action.module';

export class Module 
{
    @prop()
    name:string
    @prop()
    description:string;
    @prop()
    actions:Action[];
}
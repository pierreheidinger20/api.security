import { prop } from '@typegoose/typegoose';
import { Module } from './module.mode';

export class Application
{
    @prop()
    name:string;
    @prop()
    description:string;
    @prop()
    modules: Module[];
}
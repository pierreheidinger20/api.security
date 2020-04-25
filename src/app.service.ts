import { Injectable } from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import { Model } from "mongoose";
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { User } from './_models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AppService 
{
  constructor(
    @InjectModel(User)private readonly userModel: ReturnModelType<typeof User>,
    private readonly jwtService: JwtService
  ) 
  {}

  async validateUser(username:string,password:string) : Promise<any>
  {
     const user = await this.userModel.findOne({ Username : username });

     if(user && user.password == password) return user;
    
     return null;
  };
  async login(user:User)
  {
    const payload = { username : user.username , applications : user.applications };

    const _token = { access_token : this.jwtService.sign(payload)};

    return _token;
  };

}

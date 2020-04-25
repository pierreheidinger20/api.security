import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './_config/constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './_models/user.model';


@Module({
  imports: 
  [
      TypegooseModule.forRoot('mongodb://admin:admin123@ds259820.mlab.com:59820/projects',{useNewUrlParser: true}),
      TypegooseModule.forFeature([ User ]),
      JwtModule.register({ secret: jwtConstants.secret , signOptions:{ expiresIn : jwtConstants.expiresIn }})
  ],
  controllers: [AppController],
  providers: [AppService,LocalStrategy,JwtStrategy],
})
export class AppModule {}

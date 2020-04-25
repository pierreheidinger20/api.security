
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, SetMetadata } from '@nestjs/common';
import { jwtConstants } from './_config/constants';
import { User } from './_models/user.model';
import { MetadataScanner, Reflector } from '@nestjs/core';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly reflector: Reflector) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader("x-auth"),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(user: User) {
    
    console.log('jwt');
    
    if(!user) return null;

    if(!user.applications) return null;

    SetMetadata('roles',user.applications)
    
    console.log(user.applications);

    return user;
  }
}
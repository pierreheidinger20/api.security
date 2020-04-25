
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {

    console.log(`entro no can`)

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    console.log(roles);
    
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.roles);
  }

  private matchRoles(roles:any,userRoles:any) : boolean
  {
    console.log(roles);
    return true;
  }


}
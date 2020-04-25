import { Controller, Get ,Post, Res,Request, UseGuards, HttpException, HttpStatus, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { response } from 'express';
import { Logger } from '@nestjs/common';
import { RolesGuard } from './_guards/roles.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
    ) 
  {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request)
  {
    return this.appService.login(request.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @UseGuards(RolesGuard)
  @Post('test')
  async test(@Request() req)
  {
      return req.user;
  }
}

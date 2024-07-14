import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
//   private userService;
//   constructor() {
//     //     this.userService = userSerrvice;
//     //or
//     this.userService = new UserService();
//   }
    constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.get();
    // return { name: 'Debasish Debnath', email: 'ddebnath241@gmail.com' };
  }

  @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }
  @Patch()
  update(@Req() req: Request, @Param() param:{userId: number}) {
    return this.userService.update(req,param)
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUser(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}

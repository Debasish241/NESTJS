import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Debasish Debnath', email: 'ddebnath241@gmail.com' };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return { body: updateUserDto, userId };
  }

  getUser(userId: { userId: number }) {
    return userId;
  }
  delete(userId: { userId: number }) {
    return userId;
  }
}

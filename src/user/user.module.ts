import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
})
export class UserModule {}

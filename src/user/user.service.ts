import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  get() {
    return { name: 'Debasish Debnath', email: 'ddebnath241@gmail.com' };
  }

  create(req: Request) {
    return req.body;
  }
  
  update(req: Request, param: { userId: number }) {
    return { body: req.body, param };
  }

  getUser(param: { userId: number }) {
    return param;
  }
  delete(param: { userId: number }) {
    return param;
  }
}

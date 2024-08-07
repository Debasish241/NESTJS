import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { jwtConstants } from './auth.constant';
import { Injectable } from '@nestjs/common';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExplanation: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}

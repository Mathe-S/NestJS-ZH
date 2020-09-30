import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentials } from './dto/auth-credentials.dto';
import { AccessToken, Payload } from './jwt-intefaces';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signup(authCredentials: AuthCredentials): Promise<void> {
    return await this.userRepository.signup(authCredentials);
  }

  async signin(authCredentials: AuthCredentials): Promise<AccessToken> {
    const username = await this.userRepository.signin(authCredentials);

    if (!username) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload: Payload = { username };
    const accestoken = await this.jwtService.sign(payload);

    return { accestoken };
  }
}

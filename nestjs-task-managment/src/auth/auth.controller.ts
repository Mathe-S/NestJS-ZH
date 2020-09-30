import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './auth.entity';
import { AuthService } from './auth.service';
import { AuthCredentials } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';
import { AccessToken } from './jwt-intefaces';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(
    @Body(ValidationPipe) authCredentials: AuthCredentials,
  ): Promise<void> {
    return this.authService.signup(authCredentials);
  }

  @Post('/signin')
  signin(
    @Body(ValidationPipe) authCredentials: AuthCredentials,
  ): Promise<AccessToken> {
    return this.authService.signin(authCredentials);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}

import { IsString, MaxLength, MinLength, minLength } from 'class-validator';

export class AuthCredentials {
  @IsString()
  @MinLength(4)
  @MaxLength(10)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(10)
  password: string;
}

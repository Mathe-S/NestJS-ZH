import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './auth.entity';
import { AuthCredentials } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signup(authCredentials: AuthCredentials): Promise<void> {
    const { username, password } = authCredentials;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    console.log(user.password);
    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already Exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signin(authCredentials: AuthCredentials): Promise<string> {
    const { username, password } = authCredentials;

    const user = await this.findOne({ username });

    if (user && (await user.isPasswordValid(password))) {
      return user.username;
    } else {
      return null;
    }
  }

  private hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}

import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ id_empleado, email, password_hash }: RegisterDto) {
    const user = await this.usersService.findByEmailWithPassword(email);

    if (user) {
      throw new BadRequestException('El usuario ya existe');
    }

    await this.usersService.create({
      id_empleado,
      email,
      password_hash: await bcryptjs.hash(password_hash, 10),
    });

    return {
      email,
    };
  }

  async login({ email, password_hash }: LoginDto) {
    const user = await this.usersService.findByEmailWithPassword(email);

    if (!user) {
      throw new UnauthorizedException('El email no es correcto');
    }

    const isPasswordValid = await bcryptjs.compare(
      password_hash,
      user.password_hash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = { email: user.email, id_rol: user.id_rol };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
    };
  }

  async profile({ email, id_rol }: { email: string; id_rol: number }) {
    return await this.usersService.findOneByEmail(email);
  }
}

import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '../../common/enums/rol.enum';
import { Rol } from './roles.decorator';
import { AuthGuard } from '../guard/auth.guard';
import { RolGuard } from '../guard/rol.guard';

export function Auth(...roles: Role[]) {
  return applyDecorators(Rol(...roles), UseGuards(AuthGuard, RolGuard));
}

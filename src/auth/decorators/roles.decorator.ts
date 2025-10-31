import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'id_rol';
export const Rol = (...id_rol: number[]) => SetMetadata(ROLES_KEY, id_rol);

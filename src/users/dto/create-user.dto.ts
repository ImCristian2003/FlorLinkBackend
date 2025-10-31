export class CreateUserDto {
  id_empleado: number;
  email: string;
  password_hash: string;
  id_rol?: number;
}

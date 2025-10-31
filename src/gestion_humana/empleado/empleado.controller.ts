import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmpleadoViewService } from './views/empleado_view.service';
import { EmpleadoView } from './views/empleado_view.entity';
import { Empleado } from './empleado.entity';
import { EmpleadoService } from './empleado.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('empleado')
export class EmpleadoController {
  constructor(
    private readonly empleadoService: EmpleadoViewService,
    private readonly empleadoService1: EmpleadoService,
  ) {}

  @Get('empleado-view/:celular')
  async getByCelular(
    @Param('celular') celular: string,
  ): Promise<EmpleadoView | null> {
    return await this.empleadoService.findByCelular(celular);
  }

  @Auth(Role.Admin, Role.User)
  @Get('empleado-view/correo/:correo')
  async getEmpleadoByCorreo(
    @Param('correo') correo: string,
  ): Promise<EmpleadoView | null> {
    return await this.empleadoService.findEmpleadoByCorreo(correo);
  }

  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadoService1.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Empleado | null> {
    return this.empleadoService1.findOne(id);
  }
}

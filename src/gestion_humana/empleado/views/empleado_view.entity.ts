import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({ schema: 'gestion_humana_views', name: 'informe_empleados_view' })
export class EmpleadoView {
  @ViewColumn()
  id_empleado: number;

  @ViewColumn()
  tipo_documento: string;

  @ViewColumn()
  nro_documento: string;

  @ViewColumn()
  ciudad_expedicion: string;

  @ViewColumn()
  nombre: string;

  @ViewColumn()
  apellidos: string;

  @ViewColumn()
  ciudad_residencia: string;

  @ViewColumn()
  celular: string;

  @ViewColumn()
  correo: string;

  @ViewColumn()
  cargo: string;

  @ViewColumn()
  grupo: string;

  @ViewColumn()
  area: string;

  @ViewColumn()
  fecha_ingreso: Date;

  @ViewColumn()
  salario: number;

  @ViewColumn()
  salario_letras: string;

  @ViewColumn()
  auxilio_transporte: number;

  @ViewColumn()
  auxilio_transporte_letras: string;

  @ViewColumn()
  codigo_sexo: string;

  @ViewColumn()
  sexo: string;

  @ViewColumn()
  eps: string;

  @ViewColumn()
  fondo_pension: string;

  @ViewColumn()
  fondo_cesantias: string;

  @ViewColumn()
  dias_vacaciones: number;

  @ViewColumn()
  fecha_nacimiento: Date;

  @ViewColumn()
  estado_civil: string;

  @ViewColumn()
  cantidad_hijos: number;

  @ViewColumn()
  hijos: string;

  @ViewColumn()
  medio_transporte: string;

  @ViewColumn()
  cedula_jefe: number;

  @ViewColumn()
  es_jefe: boolean;

  @ViewColumn()
  tipo_contrato: string;

  @ViewColumn()
  estado_empleado: string;
}

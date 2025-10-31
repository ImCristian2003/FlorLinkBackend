import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'detalle_compra', schema: 'abastecimiento' })
export class DetalleCompra {
  @PrimaryGeneratedColumn()
  id_detalle_compra: number;

  @Column({ type: 'int' })
  id_categoria: number;

  @Column({ type: 'int' })
  id_orden_compra: number;

  @Column()
  descripcion_producto: string;

  @Column()
  unidad_medida: string;

  @Column({ type: 'int' })
  cantidad_solicitada: number;

  @Column()
  estado_detalle_compra: string;

  @Column({ nullable: true })
  fecha_validacion_detalle_compra: Date;
}

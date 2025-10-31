import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categoria_producto', schema: 'tablas_basicas' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria_producto: number;

  @Column()
  nombre_categoria_producto: string;
}

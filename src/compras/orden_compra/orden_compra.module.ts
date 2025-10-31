import { Module } from '@nestjs/common';
import { OrdenCompraService } from './orden_compra.service';
import { OrdenCompraController } from './orden_compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenCompra } from './orden_compra.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenCompra])],
  providers: [OrdenCompraService],
  controllers: [OrdenCompraController],
})
export class OrdenCompraModule {}

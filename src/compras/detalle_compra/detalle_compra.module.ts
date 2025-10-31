import { Module } from '@nestjs/common';
import { DetalleCompraService } from './detalle_compra.service';
import { DetalleCompraController } from './detalle_compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleCompra } from './detalle_compra.entity';
import { DetalleCompraServiceView } from './detalle_compra_view.service';
import { DetalleCompraView } from './detalle_compra_view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleCompra, DetalleCompraView])],
  providers: [DetalleCompraService, DetalleCompraServiceView],
  controllers: [DetalleCompraController],
})
export class DetalleCompraModule {}

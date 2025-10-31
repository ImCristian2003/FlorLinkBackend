import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleCompraView } from './detalle_compra_view.entity';

@Injectable()
export class DetalleCompraServiceView {
  constructor(
    @InjectRepository(DetalleCompraView)
    private detalleCompraViewRepository: Repository<DetalleCompraView>,
  ) {}

  // Obtener todos los informes de los detalles de compra
  findAll(): Promise<DetalleCompraView[]> {
    return this.detalleCompraViewRepository.find();
  }
}

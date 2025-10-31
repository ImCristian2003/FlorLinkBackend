export class CreateDetalleCompraDto {
  id_detalle_compra: number;
  id_categoria: number;
  id_orden_compra: number;
  descripcion_producto: string;
  unidad_medida: string;
  cantidad_solicitada: number;
  estado_detalle_compra: string;
}

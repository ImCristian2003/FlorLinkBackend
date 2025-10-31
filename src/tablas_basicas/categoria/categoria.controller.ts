import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Controller('categoria')
export class CategoriaController {
  constructor(private categoriaService: CategoriaService) {}

  // End point para traer todas las categorías
  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  // End point para crear una categoría
  @Post()
  create(@Body() createDto: CreateCategoriaDto): Promise<Categoria> {
    return this.categoriaService.create(createDto);
  }
}

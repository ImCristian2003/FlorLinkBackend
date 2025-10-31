import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  // Función para obtener todas las categorías
  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  // Función para crear una nueva categoría
  async create(createDto: CreateCategoriaDto): Promise<Categoria> {
    // crear instancia del modelo del dto (objeto listo para guardarse)
    const new_category = this.categoriaRepository.create(createDto);
    // Guardar en la base de datos el objeto creado por .create
    return await this.categoriaRepository.save(new_category);
  }
}

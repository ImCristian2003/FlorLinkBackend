// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
// import { RolesModule } from './roles/roles.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '123456',
//       database: 'indrive_db',
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true,
//     }),
//     UsersModule,
//     AuthModule,
//     RolesModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoModule } from './gestion_humana/empleado/empleado.module';
import { EvaluacionDesempenioModule } from './gestion_humana/evaluacion_desempenio/evaluacion_desempenio.module';
import { PreguntaEvaluacionModule } from './gestion_humana/pregunta_evaluacion/pregunta_evaluacion.module';
import { OrdenCompraModule } from './compras/orden_compra/orden_compra.module';
import { DetalleCompraModule } from './compras/detalle_compra/detalle_compra.module';
import { CategoriaModule } from './tablas_basicas/categoria/categoria.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Set to false in production
      // options: { encrypt: true },
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    EmpleadoModule,
    EvaluacionDesempenioModule,
    PreguntaEvaluacionModule,
    OrdenCompraModule,
    DetalleCompraModule,
    CategoriaModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService /*, CalidadEsquejesService*/],
})
export class AppModule {}

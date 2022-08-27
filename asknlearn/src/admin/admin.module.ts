import { Module } from '@nestjs/common';
import { AdminService } from './services/admin.service';
import { AdminController } from './controllers/admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsEntity } from './models/admin.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([AdminsEntity])
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}

import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './models/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([UsersEntity])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}

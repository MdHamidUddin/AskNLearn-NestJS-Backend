import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../models/user.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { Users } from '../models/user.interface';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository:Repository<UsersEntity>
    ){ }

    insertData(user:Users):Observable<Users>{
        return from(this.usersRepository.save(user));
    }

    showAllUser():Observable<Users[]>{
        return from(this.usersRepository.find());
    }

      finduser(id:number){
        const u=this.usersRepository.find( { where: { id: id }});

       if(u==null){
        throw new NotFoundException('Could Not Find user');
       }
       return u;
     }

    updateUser(id:number,user:Users):Observable<UpdateResult>{
        return from (this.usersRepository.update(id,user));
    }

    deleteUser(id:number):Observable<DeleteResult>{
        return from(this.usersRepository.delete(id));
    }

}

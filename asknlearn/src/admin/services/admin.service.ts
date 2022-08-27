import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminsEntity } from '../models/admin.entity';
import { Repository, UpdateResult } from 'typeorm';
import {Admins} from '../models/admin.interface';

import { from, Observable } from 'rxjs';


@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(AdminsEntity)
        private readonly adminsRepository:Repository<AdminsEntity>){}

        async LoginCheck(username,password): Promise<any> 
        {
            const u=this.adminsRepository.find( { where: { username: username ,password:password}});
           
            if (u == null) {
                throw new BadRequestException('Invalid user');
            }
            else 
             return u;
            
        }

        findAdmin(id:number){
            const u=this.adminsRepository.find( { where: { id: id }});
    
           if(u==null){
            throw new NotFoundException('Could Not Find user');
           }
           return u;
         }

         updateAdmin(id:number,admin:Admins):Observable<UpdateResult>{
            return from (this.adminsRepository.update(id,admin));
        }
    

}

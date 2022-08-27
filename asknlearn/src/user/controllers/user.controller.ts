import { Controller, Post,Body, Get, Put, Param, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Users } from '../models/user.interface';
import { UpdateResult, DeleteResult } from 'typeorm';


@Controller('user')
export class UserController {
    constructor(private UserService:UserService ){}

    @Post()
    Insert(@Body() user:Users):Observable<Users>{
        return this.UserService.insertData(user);
    }

    @Get()
    AllUser():Observable<Users[]>{
        return this.UserService.showAllUser();
    }

    @Get(':id')
    User(@Param('id') id:number){
        return this.UserService.finduser(id);
    }

    @Put(':id')

    updateUser(@Param('id') id:number,@Body() user:Users):Observable<UpdateResult>{
        return this.UserService.updateUser(id,user);
    }

    @Delete(':id')

    deleteUser(@Param('id') id:number):Observable<DeleteResult>{
        return this.UserService.deleteUser(id);
    }
}

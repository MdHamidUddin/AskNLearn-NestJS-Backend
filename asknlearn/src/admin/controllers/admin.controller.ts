import { Body, Controller ,Get,Param,Post, Put} from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { Admins } from '../models/admin.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('admin')
export class AdminController {

    constructor( private AdminService:AdminService){}

    @Post()
    Login(@Body() admin:Admins){
        return this.AdminService.LoginCheck(admin.username,admin.password);
    }

    @Get(':id')
    User(@Param('id') id:number){
        return this.AdminService.findAdmin(id);
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() admin:Admins):Observable<UpdateResult>{
        return this.AdminService.updateAdmin(id,admin);
    }

}

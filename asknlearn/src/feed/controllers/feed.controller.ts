import { Body, Controller, Post ,Get,Put, Param, Delete} from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
    constructor(private FeedService: FeedService){ }

    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost>{
        return this.FeedService.createPost(post);
    }


    @Get()
    findAll():Observable<FeedPost[]>{
        return this.FeedService.findAllPost();
    }

    @Put(':id')
    Update(@Param('id') id: number ,@Body() post:FeedPost): Observable<UpdateResult>{
        return this.FeedService.updatePost(id,post);
    }

    @Delete(':id')
    delete(@Param('id') id: number ):Observable<DeleteResult>{
        return this.FeedService.deletePots(id);
    }

    
}

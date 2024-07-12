import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express'
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto'
import { UsersService } from 'src/users/services/users/users.service'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get()
    getUsers(
        //@Query('sortDesc', ParseBoolPipe) sortDesc: boolean
        ) {
        return this.usersService;
    }
    @Get("posts")
    GetUsersPosts() {
        return [{
            username: "makikaka",
            email: "mladen.tasevski@gmail.com",
            posts: [
                {
                    id: 1,
                    title: "Post 1"
                },
                {
                    id: 2,
                    title: "Post 2"
                },
            ]   
        }]
    }
    @Get("posts/comments")
    GetPostsComments() {
        return {id: 1,
            title: "Post 1",
            comments: [

            ]}
    }
    @Post("create")
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto, @Res() response: Response){
        console.log(userData)
        this.usersService.createUser(userData);
        response.send('Created')
    }
    @Get(":id")
    getUserId(@Param('id', ParseIntPipe) id: number, @Res() response: Response)
    {
        console.log(id)
        const user = this.usersService.findUserId(id)
        if (!user) 
            response.status(400).send("Not found")
        response.send(user)
    }
    @Get(":id/:postId")
    getUserPostId(@Param('id') id: String, @Param("postId") postId: String, @Res() response: Response)
    {
        console.log(id, postId)
        response.send([id, postId])
    }
}

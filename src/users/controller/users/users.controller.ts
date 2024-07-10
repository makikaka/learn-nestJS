import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [{username: "makikaka", email: "mladen.tasevski@gmail.com"}]
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
}

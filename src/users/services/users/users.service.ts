import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {
            username: "johnDoe",
            email: "john.doe@example.com"
        },
        {
            username: "janeDoe",
            email: "jane.doe@example.com"
        },
        {
            username: "samSmith",
            email: "sam.smith@example.com"
        },
        {
            username: "aliceJohnson",
            email: "alice.johnson@example.com"
        },
        {
            username: "bobBrown",
            email: "bob.brown@example.com"
        },
        {
            username: "charlieDavis",
            email: "charlie.davis@example.com"
        },
        {
            username: "daveEvans",
            email: "dave.evans@example.com"
        },
        {
            username: "eveFoster",
            email: "eve.foster@example.com"
        },
        {
            username: "frankGreen",
            email: "frank.green@example.com"
        },
        {
            username: "graceHill",
            email: "grace.hill@example.com"
        }
    ];
    
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(createUser: CreateUserType) {
        this.fakeUsers.push(createUser)
    }
    findUserId(id: number) {
        return this.fakeUsers.at(id);
    }
}
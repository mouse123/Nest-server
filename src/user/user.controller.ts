import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service'
import { User } from './user.entity'
import { UserDto } from './paramDto/dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('list')
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<User[]> {
        return this.userService.findOne(id);
    }

    @Post()
    create(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}
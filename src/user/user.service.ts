import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(name: string): Promise<User[]> {
    return await this.userRepository.find({ name: name });
  }

  async create(userInterface: UserInterface) {
    const user = new User();
    user.name = userInterface.name;
    return await this.userRepository.save(user);
  }

  async update(id: number, userInterface: UserInterface) {
    let user = await this.userRepository.findOne(id);
    user.name = userInterface.name;
    return await this.userRepository.save(user);
  }

  async delete(id: number) {
    let user = await this.userRepository.findOne(id);
    return await this.userRepository.remove(user);
  }
}
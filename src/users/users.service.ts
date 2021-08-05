import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; //[{ id: 1, name: 'June' }];

  create(createUserDto: CreateUserDto): User {
    const newUsers = { id: Date.now(), ...createUserDto };
    this.users.push(newUsers);
    return newUsers;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number): { msg: string } {
    this.users = this.users.filter((user) => user.id !== id);
    return { msg: 'User deleted successfully' };
  }
}

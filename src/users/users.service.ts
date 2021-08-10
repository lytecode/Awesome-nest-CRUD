import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'June' },
    { id: 1, name: 'Felix' },
    { id: 2, name: 'Emilia' },
    { id: 2, name: 'Messi' },
  ];

  create(createUserDto: CreateUserDto): User {
    const newUsers = { id: Date.now(), ...createUserDto };
    this.users.push(newUsers);
    return newUsers;
  }

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      const updatedUser = { ...user, ...updateUserDto };
      this.users.splice(id, 1);
      this.users.push(updatedUser);
      return updatedUser;
    }
    throw new NotFoundException('User with id not found');
  }

  remove(id: number): { msg: string } {
    this.users = this.users.filter((user) => user.id !== id);
    return { msg: 'User deleted successfully' };
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User> = [
    {
      id: 1,
      first_name: 'Alex',
      last_name: 'Marin',
      email: 'alexmarinmendez@gmail.com',
      password: 'secret',
      avatar: 'soylindo.jpg'
    },
    {
      id: 2,
      first_name: 'Fabio',
      last_name: 'Arias',
      email: 'fabio@gmail.com',
      password: 'secret',
      avatar: 'elmejor.jpg'
    },
  ];

  create(createUserDto: CreateUserDto) {
    const user = {
      id: 0,
      ...createUserDto,
    }
    this.users.push(user)
    return this.users
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

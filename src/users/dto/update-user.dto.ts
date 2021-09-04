import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly password?: string;
}

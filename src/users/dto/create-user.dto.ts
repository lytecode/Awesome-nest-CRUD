import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
}

import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty()
  id: number;

  firstName: string;

  lastName: string;

  email: string;

  password: string;
}

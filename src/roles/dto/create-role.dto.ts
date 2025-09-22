import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDTO {
  @ApiProperty({
    example: 'admin',
    description: 'роль',
  })
  value: string;

  @ApiProperty({
    example: 'admin role',
    description: 'описание роли',
  })
  description: string;
}

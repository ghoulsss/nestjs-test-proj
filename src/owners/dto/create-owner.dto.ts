import { ApiProperty } from '@nestjs/swagger';

export class CreateOwnerDto {
  @ApiProperty({ example: 'Игорь', description: 'Имя хозяина' })
  name: string;

  @ApiProperty({
    example: 'zxxx@mail.ru',
    description: 'email хозяина',
  })
  email: string;

  @ApiProperty({
    example: '+79605405040',
    description: 'телефон',
  })
  phone: string;
}

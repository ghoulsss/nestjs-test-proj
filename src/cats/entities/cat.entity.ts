import { ApiProperty } from '@nestjs/swagger';

export class Cat {
  @ApiProperty({ example: 'bobik', description: 'Имя кота' })
  name: string;

  @ApiProperty({
    example: '1',
    description: 'id породы',
  })
  breed_id: number;

  @ApiProperty({
    example: '1',
    description: 'возраст кота',
  })
  age: number;

  @ApiProperty({
    example: '1',
    description: 'id хозяина',
  })
  owner_id: number;
}

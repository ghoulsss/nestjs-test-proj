import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ example: 'bobik', description: 'Имя кота' })
  readonly name: string;

  @ApiProperty({
    example: '1',
    description: 'id породы',
  })
  breed_id: number;
}

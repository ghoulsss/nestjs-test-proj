import { ApiProperty } from '@nestjs/swagger';

export class Breed {
  @ApiProperty({
    example: 'Британская-короткошерстная',
    description: 'Порода',
  })
  readonly name: string;
}

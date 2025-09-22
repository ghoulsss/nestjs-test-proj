import { ApiProperty } from '@nestjs/swagger';

export class CreateBreedDto {
  @ApiProperty({
    example: 'Британская-короткошерстная',
    description: 'Порода',
  })
  readonly name: string;
}

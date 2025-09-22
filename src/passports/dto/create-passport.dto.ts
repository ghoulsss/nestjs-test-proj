import { ApiProperty } from '@nestjs/swagger';

export class CreatePassportDto {
  @ApiProperty({
    example: '48971094821-309348',
    description: 'Номер паспорта',
  })
  passportNumber: string;

  @ApiProperty({
    example: '1',
    description: 'id кота',
  })
  cat_id: number;
}

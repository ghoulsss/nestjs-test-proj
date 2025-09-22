import { Injectable } from '@nestjs/common';
import { CreatePassportDto } from './dto/create-passport.dto';
import { UpdatePassportDto } from './dto/update-passport.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PassportsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreatePassportDto) {
    const { passportNumber, cat_id } = dto;
    const passport = await this.prisma.catPassport.create({
      data: {
        passportNumber,
        cat_id,
      },
      include: {
        cat: true,
      },
    });
    return passport;
  }

  async findAll() {
    const passports = await this.prisma.catPassport.findMany({
      include: {
        cat: true,
      },
    });
    return passports;
  }

  async findOne(id: number) {
    const passport = this.prisma.catPassport.findUnique({
      where: {
        id: id,
      },
      include: {
        cat: true,
      },
    });
    return passport;
  }

  async update(id: number, dto: UpdatePassportDto) {
    await this.prisma.catPassport.update({ data: dto, where: { id: id } });
  }

  async remove(id: number) {
    await this.prisma.catPassport.delete({
      where: {
        id: id,
      },
    });
  }
}

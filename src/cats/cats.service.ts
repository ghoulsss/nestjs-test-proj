import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateCatDto) {
    const { name, breed_id } = dto;
    const cat = await this.prisma.cat.create({
      data: {
        name,
        breed_id: breed_id,
      },
      include: {
        breed: true,
      },
    });
    return cat;
  }

  async findAll() {
    const cats = await this.prisma.cat.findMany({
      include: {
        breed: true,
      },
    });
    return cats;
  }

  async findOne(id: number) {
    const cat = this.prisma.cat.findUnique({
      where: {
        id: id,
      },
      include: {
        breed: true,
      },
    });
    return cat;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    await this.prisma.cat.update({ data: updateCatDto, where: { id: id } });
  }

  async remove(id: number) {
    await this.prisma.cat.delete({
      where: {
        id: id,
      },
    });
  }
}

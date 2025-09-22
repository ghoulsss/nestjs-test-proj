import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateCatDto) {
    const { name, age, breed_id, owner_id } = dto;
    const cat = await this.prisma.cat.create({
      data: {
        name,
        age,
        breed_id,
        owner_id,
      },
      include: {
        breed: true,
        owner: true,
      },
    });
    return cat;
  }

  async findAll() {
    const cats = await this.prisma.cat.findMany({
      include: {
        breed: true,
        owner: true,
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
        owner: true,
      },
    });
    return cat;
  }

  async update(id: number, dto: UpdateCatDto) {
    await this.prisma.cat.update({ data: dto, where: { id: id } });
  }

  async remove(id: number) {
    await this.prisma.cat.delete({
      where: {
        id: id,
      },
    });
  }
}

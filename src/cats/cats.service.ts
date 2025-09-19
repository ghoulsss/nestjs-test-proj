import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateCatDto) {
    const cat = await this.prisma.cat.create({ data: dto });
    return `Cat added : ${JSON.stringify(cat)}`;
  }

  async findAll() {
    const cats = await this.prisma.cat.findMany();
    return cats;
    // return `This action returns all cats`;
  }

  async findOne(id: number) {
    const cat = this.prisma.cat.findMany({
      where: {
        id: id,
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

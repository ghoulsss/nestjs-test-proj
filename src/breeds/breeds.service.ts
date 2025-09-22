import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BreedsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateBreedDto) {
    const breed = await this.prisma.breed.create({ data: dto });
    return breed;
  }

  async findAll() {
    const breeds = await this.prisma.breed.findMany({
      include: {
        cats: true,
      },
    });
    return breeds;
  }

  async findOne(id: number) {
    const breed = await this.prisma.breed.findUnique({
      where: {
        id: id,
      },
      include: {
        cats: true,
      },
    });
    return breed;
  }

  async update(id: number, UpdateBreedDto: UpdateBreedDto) {
    await this.prisma.breed.update({ data: UpdateBreedDto, where: { id: id } });
  }

  async remove(id: number) {
    await this.prisma.breed.delete({
      where: {
        id: id,
      },
    });
  }
}

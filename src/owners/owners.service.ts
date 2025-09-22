import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OwnersService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateOwnerDto) {
    const { name, email, phone } = dto;
    const owner = await this.prisma.owner.create({
      data: {
        name,
        email,
        phone,
      },
      include: {
        cats: true,
        roles: true,
      },
    });
    return owner;
  }

  async findAll() {
    const cats = await this.prisma.owner.findMany({
      include: {
        roles: true,
        cats: true,
      },
    });
    return cats;
  }

  async findOne(id: number) {
    const owner = this.prisma.owner.findUnique({
      where: {
        id: id,
      },
      include: {
        roles: true,
        cats: true,
      },
    });
    return owner;
  }

  async update(id: number, dto: UpdateOwnerDto) {
    await this.prisma.owner.update({ data: dto, where: { id: id } });
  }

  async remove(id: number) {
    await this.prisma.owner.delete({
      where: {
        id: id,
      },
    });
  }
}

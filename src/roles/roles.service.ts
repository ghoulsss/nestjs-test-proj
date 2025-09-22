import { Injectable } from '@nestjs/common';
import { CreateRoleDTO } from './dto/create-role.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: DatabaseService) {}

  async createRole(dto: CreateRoleDTO) {
    const { value, description } = dto;
    const role = await this.prisma.role.create({
      data: { value, description },
    });

    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.prisma.role.findFirst({
      where: {
        value: value,
      },
      include: {
        owners: true,
      },
    });
    return role;
  }
}

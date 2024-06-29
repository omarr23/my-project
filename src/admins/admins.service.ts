import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdminsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createAdminDto: Prisma.adminsCreateInput) {
    return this.databaseService.admins.create({ data: createAdminDto });
  }

  async findAll(role?: 'Admin') {
    if (role)
      return this.databaseService.admins.findMany({
        where: {
          role,
        },
      });
  }

  async findOne(id: number) {
    return this.databaseService.admins.findUnique({ where: { id } });
  }

  async update(id: number, updateAdminDto: Prisma.adminsUpdateInput) {
    return this.databaseService.admins.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  remove(id: number) {
    return this.databaseService.admins.delete({ where: { id } });
  }
}

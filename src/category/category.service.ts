import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findMany() {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  async findById(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    return category;
  }
}

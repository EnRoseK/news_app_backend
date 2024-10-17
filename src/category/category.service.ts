import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
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

  async create(input: Prisma.CategoryCreateInput) {
    const createdCategory = await this.prisma.category.create({
      data: input,
    });
    return createdCategory;
  }

  async update(id: string, input: Prisma.CategoryUpdateInput) {
    const updatedCategory = await this.prisma.category.update({
      data: input,
      where: { id },
    });
    return updatedCategory;
  }

  async delete(id: string) {
    const deletedCategory = await this.prisma.category.delete({ where: { id } });
    return deletedCategory;
  }
}

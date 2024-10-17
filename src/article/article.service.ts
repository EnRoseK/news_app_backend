import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    const articles = await this.prisma.article.findMany();
    return articles;
  }

  async findById(id: string) {
    const article = await this.prisma.article.findUnique({ where: { id } });
    return article;
  }

  async create(input: Prisma.ArticleCreateInput) {
    const createdArticle = await this.prisma.article.create({ data: input });
    return createdArticle;
  }

  async update(id: string, input: Prisma.ArticleUpdateInput) {
    const udpatedArticle = await this.prisma.article.update({ where: { id }, data: input });
    return udpatedArticle;
  }

  async delete(id: string) {
    const deletedArticle = await this.prisma.article.delete({ where: { id } });
    return deletedArticle;
  }
}

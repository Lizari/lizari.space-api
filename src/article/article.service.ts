import { Injectable } from '@nestjs/common';
import { Article, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.upsert({
      where: {
        title: data.title
      },
      update: {...data},
      create: data,
    });
  }

  async findAll(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

  async findOne(id: number): Promise<Article> {
    return this.prisma.article.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, data: Prisma.ArticleUpdateInput): Promise<Article> {
    return this.prisma.article.update({
      where: { id: id },
      data,
    });
  }

  async remove(id: number): Promise<Article> {
    return this.prisma.article.delete({
      where: { id: id },
    });
  }
}

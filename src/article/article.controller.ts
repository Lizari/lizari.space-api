import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article, Prisma } from '@prisma/client';
import { BasicAuthGuard } from 'src/auth/basic-auth.guard';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @UseGuards(BasicAuthGuard)
  @Post()
  async create(@Body() data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.articleService.create(data);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article> {
    return this.articleService.findOne(+id);
  }

  @UseGuards(BasicAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.ArticleUpdateInput,
  ): Promise<Article> {
    return this.articleService.update(+id, data);
  }

  @UseGuards(BasicAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Article> {
    return this.articleService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [CategoryModule],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}

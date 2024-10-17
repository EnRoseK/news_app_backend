import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  @HttpCode(200)
  async getManyCategories() {
    const categories = await this.categoryService.findMany();
    return categories;
  }

  @Get(':id')
  @HttpCode(200)
  async getCategoryById(@Param('id') id: string) {
    const category = await this.categoryService.findById(id);
    return category;
  }
}

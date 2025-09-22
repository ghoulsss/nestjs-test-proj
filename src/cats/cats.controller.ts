import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Cat } from './entities/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: 'Создание кота' })
  @ApiResponse({ status: 200, type: Cat })
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @ApiOperation({ summary: 'Получение всех котов' })
  @ApiResponse({ status: 200, type: [Cat] })
  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @ApiOperation({ summary: 'Получение одного кота' })
  @ApiResponse({ status: 200, type: Cat })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Изменение кота' })
  // @ApiResponse({ status: 200, type: Cat })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @ApiOperation({ summary: 'Удаление кота' })
  // @ApiResponse({ status: 200, type: Cat })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}

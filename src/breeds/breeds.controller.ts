import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Breed } from './entities/breed.entity';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @ApiOperation({ summary: 'Создание породы' })
  @ApiResponse({ status: 200, type: Breed })
  @Post()
  create(@Body() createBreedDto: CreateBreedDto) {
    return this.breedsService.create(createBreedDto);
  }

  @ApiOperation({ summary: 'Получение всех пород' })
  @ApiResponse({ status: 200, type: [Breed] })
  @Get()
  findAll() {
    return this.breedsService.findAll();
  }

  @ApiOperation({ summary: 'Получение одной породы' })
  @ApiResponse({ status: 200, type: Breed })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breedsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Изменение породы' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBreedDto: UpdateBreedDto) {
    return this.breedsService.update(+id, updateBreedDto);
  }

  @ApiOperation({ summary: 'Удаление породы' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breedsService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Cat } from './entities/cat.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: 'Создание кота' })
  @ApiResponse({ status: 200, type: Cat })
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'bobik', description: 'Имя кота' },
        breed_id: { type: 'number', example: 1, description: 'id породы' },
        age: { type: 'number', example: 1, description: 'возраст кота' },
        owner_id: { type: 'number', example: 1, description: 'id хозяина' },
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createCatDto: CreateCatDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('file uploaded', file);
    return this.catsService.create(createCatDto, file);
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
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @ApiOperation({ summary: 'Удаление кота' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}

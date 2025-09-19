import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassportsService } from './passports.service';
import { CreatePassportDto } from './dto/create-passport.dto';
import { UpdatePassportDto } from './dto/update-passport.dto';

@Controller('passports')
export class PassportsController {
  constructor(private readonly passportsService: PassportsService) {}

  @Post()
  create(@Body() createPassportDto: CreatePassportDto) {
    return this.passportsService.create(createPassportDto);
  }

  @Get()
  findAll() {
    return this.passportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passportsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassportDto: UpdatePassportDto) {
    return this.passportsService.update(+id, updatePassportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passportsService.remove(+id);
  }
}

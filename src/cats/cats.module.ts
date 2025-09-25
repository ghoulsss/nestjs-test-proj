import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({ dest: 'cats' })],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}

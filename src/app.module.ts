import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { PassportsModule } from './passports/passports.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CatsModule, OwnersModule, PassportsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

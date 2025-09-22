import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { OwnersModule } from './owners/owners.module';
import { PassportsModule } from './passports/passports.module';
import { DatabaseModule } from './database/database.module';
import { RolesModule } from './roles/roles.module';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [CatsModule, OwnersModule, PassportsModule, DatabaseModule, RolesModule, BreedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

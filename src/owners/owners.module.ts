import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [OwnersController],
  providers: [OwnersService],
  imports: [RolesModule],
})
export class OwnersModule {}

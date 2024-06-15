import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TechnologySchema } from './infraestructure/technology.entity';
import { TechnologyController } from './infraestructure/technology.controller';
import { TechnologyService } from './application/technology.service';

@Module({
  imports: [TypeOrmModule.forFeature([TechnologySchema])],
  controllers: [TechnologyController],
  providers: [TechnologyService],
})
export class TechnologiesModule {}

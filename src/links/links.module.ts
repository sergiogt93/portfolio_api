import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LinkService } from './application/application.service';
import { LinkSchema } from './infraestructure/link.entity';
import { LinkController } from './infraestructure/link.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LinkSchema])],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinksModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SoftSkillController } from './infraestructure/soft-skill.controller';
import { SoftSkillService } from './application/soft-skill.service';
import { SoftSkillSchema } from './infraestructure/soft-skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SoftSkillSchema])],
  controllers: [SoftSkillController],
  providers: [SoftSkillService],
})
export class SoftSkillsModule {}

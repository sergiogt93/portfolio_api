import { Body, Controller, Post } from '@nestjs/common';
import { DB_NAME_SCHEMA } from 'src/common/infraestructure/constants/dbNameSchemas';
import { CreateNewSoftSkillDto } from 'src/soft-skills/application/dto/create-new.dto';
import { SoftSkillService } from 'src/soft-skills/application/soft-skill.service';

@Controller(DB_NAME_SCHEMA.softSkill)
export class SoftSkillController {
  constructor(private readonly softSkillsService: SoftSkillService) {}

  @Post()
  create(@Body() createSoftSkillDto: CreateNewSoftSkillDto) {
    return this.softSkillsService.create(createSoftSkillDto);
  }
}

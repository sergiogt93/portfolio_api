import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNewSoftSkillDto } from './dto/create-new.dto';

import { SoftSkillSchema } from '../infraestructure/soft-skill.entity';
import { SoftSkillModel } from '../domain/soft-skill.model';

@Injectable()
export class SoftSkillService {
  constructor(
    @InjectRepository(SoftSkillSchema)
    private readonly softSkillsRepository: Repository<SoftSkillModel>,
  ) {}

  async create(
    createSoftSkillDto: CreateNewSoftSkillDto,
  ): Promise<SoftSkillModel> {
    try {
      const softSkill = this.softSkillsRepository.save(createSoftSkillDto);
      return softSkill;
    } catch (error) {
      throw new Error(error);
    }
  }
}

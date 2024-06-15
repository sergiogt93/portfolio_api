import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNewTechnologyDto } from './dto/create-new.dto';

import { TechnologySchema } from '../infraestructure/technology.entity';
import { TechnologyModel } from '../domain/technology.model';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(TechnologySchema)
    private readonly technologyRepository: Repository<TechnologyModel>,
  ) {}

  async create(
    createSoftSkillDto: CreateNewTechnologyDto,
  ): Promise<TechnologyModel> {
    try {
      const technology = this.technologyRepository.save(createSoftSkillDto);
      return technology;
    } catch (error) {
      throw new Error(error);
    }
  }
}

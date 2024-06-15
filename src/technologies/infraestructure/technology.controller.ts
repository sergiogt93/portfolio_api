import { Body, Controller, Post } from '@nestjs/common';
import { CreateNewTechnologyDto } from 'src/technologies/application/dto/create-new.dto';
import { TechnologyService } from 'src/technologies/application/technology.service';

@Controller('technologies')
export class TechnologyController {
  constructor(private readonly technologyService: TechnologyService) {}

  @Post()
  create(@Body() creatTechnologyDto: CreateNewTechnologyDto) {
    return this.technologyService.create(creatTechnologyDto);
  }
}

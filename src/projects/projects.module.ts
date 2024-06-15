import { Module } from '@nestjs/common';
import { ProjectController } from './infraestructure/project.controller';
import { ProjectService } from './application/project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectsModule {}

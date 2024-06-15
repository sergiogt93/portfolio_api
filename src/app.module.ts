import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { DataSourceConfig } from '../db/data.source';
import { UploadModule } from './upload/upload.module';

import { SoftSkillsModule } from './soft-skills/soft-skills.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { LinksModule } from './links/links.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV.trim()}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    UploadModule,
    SoftSkillsModule,
    TechnologiesModule,
    LinksModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

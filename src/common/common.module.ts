import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DataSourceConfig } from 'db/data.source';

@Module({
  imports: [TypeOrmModule.forRoot({ ...DataSourceConfig })],
  controllers: [],
  providers: [],
})
export class CommonModule {}

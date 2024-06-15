import { Module } from '@nestjs/common';
import { UploadService } from './application/upload.service';
import { UploadController } from './infraestructure/upload.controller';

@Module({
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}

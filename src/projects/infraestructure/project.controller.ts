import { Controller } from '@nestjs/common';
import { DB_NAME_SCHEMA } from 'src/common/infraestructure/constants/dbNameSchemas';

@Controller(DB_NAME_SCHEMA.project)
export class ProjectController {}

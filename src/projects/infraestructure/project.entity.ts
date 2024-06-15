import { EntitySchema } from 'typeorm';
import { DB_NAME_SCHEMA } from '../../common/infraestructure/constants/dbNameSchemas';
import { BaseModelSchema } from '../../common/infraestructure/base.entity';
import { ProjectModel } from '../domain/project.model';

export const ProjectSchema = new EntitySchema<ProjectModel>({
  name: DB_NAME_SCHEMA.project,
  columns: {
    ...BaseModelSchema.options.columns,
    title: {
      type: String,
      nullable: false,
      unique: true,
    },
    description: {
      type: String,
      nullable: false,
    },
  },
});

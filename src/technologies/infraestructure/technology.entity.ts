import { EntitySchema } from 'typeorm';
import { DB_NAME_SCHEMA } from '../../common/infraestructure/constants/dbNameSchemas';
import { BaseModelSchema } from '../../common/infraestructure/base.entity';
import { TechnologyModel, TECHNOLOGY_TYPE } from '../domain/technology.model';

export const TechnologySchema = new EntitySchema<TechnologyModel>({
  name: DB_NAME_SCHEMA.technology,
  columns: {
    ...BaseModelSchema.options.columns,
    name: {
      type: String,
      nullable: false,
      unique: true,
    },
    type: {
      type: 'enum',
      enum: TECHNOLOGY_TYPE,
      nullable: false,
    },
  },
});

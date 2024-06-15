import { EntitySchema } from 'typeorm';
import { DB_NAME_SCHEMA } from '../../common/infraestructure/constants/dbNameSchemas';
import { BaseModelSchema } from '../../common/infraestructure/base.entity';
import { SoftSkillModel } from '../domain/soft-skill.model';

export const SoftSkillSchema = new EntitySchema<SoftSkillModel>({
  name: DB_NAME_SCHEMA.softSkill,
  columns: {
    ...BaseModelSchema.options.columns,
    name: {
      type: String,
      nullable: false,
      unique: true,
    },
  },
});

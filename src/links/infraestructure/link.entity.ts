import { EntitySchema } from 'typeorm';
import { DB_NAME_SCHEMA } from '../../common/infraestructure/constants/dbNameSchemas';
import { BaseModelSchema } from '../../common/infraestructure/base.entity';
import { LINK_CATEGORY, LINK_TYPE, LinkModel } from '../domain/link.model';

export const LinkSchema = new EntitySchema<LinkModel>({
  name: DB_NAME_SCHEMA.link,
  columns: {
    ...BaseModelSchema.options.columns,
    href: {
      type: String,
      nullable: false,
      unique: true,
    },
    name: {
      type: String,
      nullable: false,
      unique: true,
    },
    type: {
      type: 'enum',
      enum: LINK_TYPE,
      nullable: false,
    },
    category: {
      type: 'enum',
      enum: LINK_CATEGORY,
      nullable: false,
    },
  },
});

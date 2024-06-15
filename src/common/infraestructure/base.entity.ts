import { EntitySchema } from 'typeorm';
import { BaseModel } from '../domain/base.model';

export const BaseModelSchema = new EntitySchema<BaseModel>({
  name: 'BaseModel',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
    },
    deletedAt: {
      type: 'timestamp',
      nullable: true,
    },
  },
});

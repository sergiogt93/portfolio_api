import { BaseModel } from '../../common/domain/base.model';

export enum LINK_TYPE {
  DEMO = 'demo',
  CODE = 'code',
}

export enum LINK_CATEGORY {
  FRONT = 'front',
  BACK = 'back',
}

export type LinkModel = BaseModel & {
  href: string;
  name: string;
  type: LINK_TYPE;
  category: LINK_CATEGORY;
};
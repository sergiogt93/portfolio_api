import { BaseModel } from '../../common/domain/base.model';

export enum TECHNOLOGY_TYPE {
  FRAMEWORK = 'framework',
  LANGUAGE = 'language',
  DB = 'database',
  TESTING = 'testing',
  DEVOPS = 'devops',
}

export type TechnologyModel = BaseModel & {
  name: string;
  type: TECHNOLOGY_TYPE;
};

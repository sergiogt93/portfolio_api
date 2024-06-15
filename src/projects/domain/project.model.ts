import { LinkModel } from 'src/links/domain/link.model';
import { BaseModel } from '../../common/domain/base.model';
import { TechnologyModel } from 'src/technologies/domain/technology.model';

export type ProjectModel = BaseModel & {
  title: string;
  description: string;
  src: string;
  links: LinkModel[];
  technologies: TechnologyModel[];
};

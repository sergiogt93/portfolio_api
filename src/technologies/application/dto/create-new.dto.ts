import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TECHNOLOGY_TYPE } from 'src/technologies/domain/technology.model';

export class CreateNewTechnologyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(TECHNOLOGY_TYPE)
  type: TECHNOLOGY_TYPE;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNewSoftSkillDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

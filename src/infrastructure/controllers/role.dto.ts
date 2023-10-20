import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRoleDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

export class AddRoleDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}

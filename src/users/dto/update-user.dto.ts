import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  id: string;

  @IsString()
  name: string

  @IsString()
  username: string

  @IsString()
  password: string

  @IsBoolean()
  @IsOptional()
  active?: boolean

  @IsDate()
  @IsOptional()
  createAt?: Date

  @IsString()
  @IsOptional()
  telephone?: string
}
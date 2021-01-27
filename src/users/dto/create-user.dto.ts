import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string

  // TODO: Verificar com Kelviny se vai ser username ou email
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
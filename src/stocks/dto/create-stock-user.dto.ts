import { IsBoolean, IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateStockUserDto {
  symbol: string;
  value: number;
  buyDate?: Date;
  sellDate?: Date;
  userID?: string;
  status?: boolean;
}

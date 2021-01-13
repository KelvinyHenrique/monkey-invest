import { IsBoolean, IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class StockUserDto {
  symbol: string;
  value: number;
  buyDate?: Date;
  sellDate?: Date;
  userID: string;
  status?: boolean;
}

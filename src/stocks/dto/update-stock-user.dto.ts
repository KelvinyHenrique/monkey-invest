import { IsBoolean, IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateStockUserDto {
  id: string;
  symbol: string;
  value: number;
  quantity?: number;
  buyDate?: Date;
  sellDate?: Date;
  userID: string;
  status?: boolean;
}

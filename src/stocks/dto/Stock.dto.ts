import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class StockDto {
  @IsString()
  symbol: string;

  @IsString()
  value: number;

  @IsDate()
  @IsOptional()
  buyDate?: Date;

  @IsDate()
  @IsOptional()
  sellDate?: Date;

  @IsString()
  userID: string;

  @IsBoolean()
  @IsOptional()
  status?: boolean;
}

import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Stock } from './interfaces/stock.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Stocks, StocksFeatureProvider } from './schemas/stocks.schema';
@Injectable()
export class StocksService {
  constructor(
    private httpService: HttpService,
    @InjectModel(StocksFeatureProvider.name)
    private readonly stockModel: ReturnModelType<typeof Stocks>,
  ) {}

  public async findAll(): Promise<Stock[]> {
    const stocks = await this.stockModel.findAll();
    return stocks;
  }

  public async create(stockUserDto: StockUserDto): any {
    const created = new this.stockModel(stockUserDto);
    return created.save();
  }

  public apiCheck(): Observable<AxiosResponse<any[]>> {
    const accessKey = '60271916ebfdf8d4cfb499a4d63e5776';
    const url = `http://api.marketstack.com/v1/eod?access_key=${accessKey}&symbols=TSLA34.BVMF`;
    return this.httpService.get(url).pipe(
      map((res) => {
        if (res.status === 200) {
          return res.data.data;
        } else {
          throw new HttpException(
            'Scrappy not answer',
            HttpStatus.EXPECTATION_FAILED,
          );
        }
      }),
    );
  }
}

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
import { StockUserDto } from './dto/create-stock-user.dto';
import { UpdateStockUserDto } from './dto/update-stock-user';

@Injectable()
export class StocksService {
    constructor(
        private httpService: HttpService,
        @InjectModel(StocksFeatureProvider.name) private readonly stocksModel: ReturnModelType<typeof Stocks>,
    ) { }

    // READ
    public async findAll() {
        return this.stocksModel.find().exec();
    }

    // CREATE
    public async create(stockUserDto: StockUserDto) {
        const created = new this.stocksModel(stockUserDto);
        return created.save();
    }

    // DELETE
    public async delete(id: string) {
        return this.stocksModel.findByIdAndDelete(id);
    }

    // UPDATE
    public async update(stockUserDto: UpdateStockUserDto) {
        return this.stocksModel.updateOne({ _id: stockUserDto.id }, stockUserDto).exec();
    }

    public apiCheck(): Observable<AxiosResponse<any[]>> {
        // TODO: AccessKey precisa ir pra .env! 
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

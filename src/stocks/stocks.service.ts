import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateStockUserDto, UpdateStockUserDto } from './dto';
import { Stocks, StocksFeatureProvider } from './schemas/stocks.schema';

@Injectable()
export class StocksService {
  constructor(
    private httpService: HttpService,
    @InjectModel(StocksFeatureProvider.name)
    private readonly stocksModel: ReturnModelType<typeof Stocks>,
  ) {}

  // READ
  public async findAll(user: string) {
    const stocks = await this.stocksModel.find({ userID: user }).lean();

    const result = [];
    for (const el of stocks) {
      const stock = await this.apiCheck(el.symbol);
      el.actualValue = stock.regularMarketPrice;
      el.actualTotal = el.actualValue * el.quantity;
      el.total = el.value * el.quantity;
      result.push(el);
    }

    return result;
  }

  public async findOne(id: string, user: string) {
    return this.stocksModel.findOne({ _id: id, userID: user }).exec();
  }

  // CREATE
  public async create(stockUserDto: CreateStockUserDto, user: string) {
    stockUserDto.userID = user;
    const created = new this.stocksModel(stockUserDto);
    return created.save();
  }

  // DELETE
  public async delete(id: string) {
    return this.stocksModel.findByIdAndDelete(id);
  }

  // UPDATE
  public async update(stockUserDto: UpdateStockUserDto) {
    return this.stocksModel
      .updateOne({ _id: stockUserDto.id }, stockUserDto)
      .exec();
  }

  public async apiCheck(stock: string) {
    const url = `https://brapi.ga/api/quote/${stock}`;
    try {
      const response = await this.httpService.get(url).toPromise();
      return response.data.results[0];
    } catch (error) {
      throw new HttpException(
        'brapi doenst recognize this stock',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }
}

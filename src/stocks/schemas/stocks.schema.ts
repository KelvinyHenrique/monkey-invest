import {
  arrayProp,
  buildSchema,
  getModelForClass,
  prop,
} from '@typegoose/typegoose';
import * as moment from 'moment';
import { ObjectId } from 'mongoose';

export class Stocks {
  @prop({ required: true })
  public symbol: string;

  @prop({ required: true })
  public value: number;

  @prop({ required: false, default: () => 1 })
  public quantity: number;

  @prop({ required: false, default: () => moment.utc().toDate() })
  public buyDate: Date;

  @prop({ required: false })
  public sellDate: Date;

  @prop({ required: true })
  public userID: ObjectId;

  @prop({ required: false, default: () => true })
  public status: boolean;
}

const StockModel = getModelForClass(Stocks);

const StockSchema = buildSchema(Stocks, { versionKey: false });

export const StocksFeatureProvider = {
  name: 'Stock',
  collection: 'Stocks',
  model: StockModel,
  schema: StockSchema,
};

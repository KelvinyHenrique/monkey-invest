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

  @prop({ required: false, default: () => moment.utc().toDate() })
  public buyDate: Date;

  @prop({ required: false })
  public sellDate: Date;

  @prop({ required: true })
  public userID: ObjectId;

  @prop({ required: false, default: () => true })
  public status: boolean;
}

const StocksModel = getModelForClass(Stocks);

const StocksSchema = buildSchema(Stocks, { versionKey: false });

export const StocksFeatureProvider = {
  name: 'Stocks',
  collection: 'Stocks',
  model: StocksModel,
  schema: StocksSchema,
};

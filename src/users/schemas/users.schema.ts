import {
  arrayProp,
  buildSchema,
  getModelForClass,
  prop,
} from '@typegoose/typegoose';
import * as moment from 'moment';
import { ObjectId } from 'mongoose';

export class Users {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public username: string;

  @prop({ required: true })
  public password: string;

  @prop({ required: false, default: () => true })
  public active: boolean;

  @prop({ required: false, default: () => moment.utc().toDate() })
  public createAt: Date;

  @prop({ required: false })
  public telephone: string;
}

const UserModel = getModelForClass(Users);

const Userschema = buildSchema(Users, { versionKey: false });

export const UsersFeatureProvider = {
  name: 'User',
  collection: 'Users',
  model: UserModel,
  schema: Userschema,
};

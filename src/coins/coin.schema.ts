import { Document, Model, model, Schema } from 'mongoose';

export const CoinSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

CoinSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export interface CoinModel extends Document {
  id: string;
  symbol: string;
  amount: string;
}

const Coin: Model<CoinModel> = model<CoinModel>('coin', CoinSchema);

export default Coin;
